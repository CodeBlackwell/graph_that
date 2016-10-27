import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

import { fetchTweets } from '../../actions/actions'
import CSS from '../components/AppStyles'

class TweetBox extends Component {

  constructor(props){
    super(props)

    this.state = {
      oldestTweetId: Math.min(Object.keys(this.props.tweets))
    }
  }

  componentWillMount() {

    this.props.fetchTweets()
  }

  _renderTweets(tweetsHash) {
    //create an array of sorted tweet id's (Chronologic order)
    var sortedIndexKeys = Object.keys(tweetsHash).sort(function(a, b) { return b - a })

    


    //create an array of tweets
    var sortedTweets = sortedIndexKeys.map(function(indexKey) {
      return { id: indexKey, status: tweetsHash[indexKey].text, createdAt: tweetsHash[indexKey].created_at }
    })
    //return jsx elements
    return sortedTweets.map(function(tweet){
      return (
        <div key={tweet.id} className="tweet" style={CSS.tweet}>
          {tweet.status}
          <h6>{formatDate(tweet.createdAt).fromNow()}</h6>
        </div>
      )
    })
  }

  render() {

    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <h2>{this.props.username}</h2>
          {this._renderTweets(this.props.tweets)}
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return { username: state.twitterFeed.username, tweets: state.twitterFeed.tweets }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweets }, dispatch)
}

/**
*@params {string} dateString - a date from twitter formatted "Wed Oct 26 18:31:56 +0000 2016"
*@returns {string} a date formatted to "YYYY-MM-DD HH:mm:ss"  
*/
function formatDate(dateString) {

  const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  }

  console.log("this is datestring", dateString)

  var result = [],
      temp
  temp = dateString.split(' ')
  result.push(temp[temp.length -1], temp[1], temp[2])
  result[1] = months[result[1]]
  result = result.join('-') + " " + temp[3]
  return moment(result)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox)