import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
    var sortedTweets = sortedIndexKeys.map(function(indexKey){
      return {id: indexKey, status: tweetsHash[indexKey].text}
    })
    //return jsx elements
    return sortedTweets.map(function(tweet){
      return (
        <div key={tweet.id} className="tweet" style={CSS.tweet}>
          {tweet.status}
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

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox)