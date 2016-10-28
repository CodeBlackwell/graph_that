import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import InfiniteScroll from 'redux-infinite-scroll'

import { fetchTweets } from '../../actions/actions'
import CSS from '../components/AppStyles'

class TweetBox extends Component {


  _renderTweet(tweet) {
    return (
      <div key={tweet.id} className="tweet" style={CSS.tweet}>
          {tweet.text}
        <div style={CSS.timestamp}>
          {formatDate(tweet.created_at).fromNow()}
        </div>
      </div>
    )
  }

  _renderTweets(tweetsHash) {
    const sortedIndexKeys = Object.keys(tweetsHash).sort(function(a, b) { return b - a })
    const sortedTweets = sortedIndexKeys.map(function(indexKey) { return tweetsHash[indexKey] })

    return sortedTweets.map(this._renderTweet)
  }

  _loadMore() {
    this.props.fetchTweets(this.props.username, this.props.oldestTweetId)
  }

  render() {
    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <h2>{this.props.username}</h2>
        <div>
          <InfiniteScroll
            items={this._renderTweets(this.props.tweets)}
            loadMore={this._loadMore.bind(this)}
            containerHeight='400px'
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox)

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
