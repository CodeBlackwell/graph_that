import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import InfiniteScroll from 'redux-infinite-scroll'

import { fetchTweets } from '../../actions/actions'
import CSS from '../components/AppStyles'

class TweetBox extends Component {


  componentWillMount() {
    this.props.fetchTweets()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      oldestTweetId: Math.min(Object.keys(nextProps.tweets)) 
    })
  }



  _renderTweets(tweetsHash) {
    //create an array of sorted tweet id's (Chronologic order)
    var sortedIndexKeys = Object.keys(tweetsHash).sort(function(a, b) { return b - a })

    //create a sorted array of tweets
    var sortedTweets = sortedIndexKeys.map(function(indexKey) {
      return { id: indexKey, status: tweetsHash[indexKey].text, createdAt: tweetsHash[indexKey].created_at }
    })
    //return jsx <div> elements for each tweet
    return sortedTweets.map(function(tweet){
      return (
        <div key={tweet.id} className="tweet" style={CSS.tweet}>
          {tweet.status}
          <div style={CSS.timestamp}>{formatDate(tweet.createdAt).fromNow()}</div>
        </div>
      )
    })
  }

  _loadMore() {
    this.props.fetchTweets(this.props.username, this.props.oldestTweetId)
  }

  render() {
    debugger
    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <h2>{this.props.username}</h2>
          <InfiniteScroll
            items={this._renderTweets()}
            loadMore={this._loadMore.bind(this)}
          />
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return { 
    username: state.twitterFeed.username, 
    tweets: state.twitterFeed.tweets, 
    oldestTweetId: state.twitterFeed.oldestTweetId 
  }
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

  var result = [],
      temp
  temp = dateString.split(' ')
  result.push(temp[temp.length -1], temp[1], temp[2])
  result[1] = months[result[1]]
  result = result.join('-') + " " + temp[3]
  return moment(result)
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox)