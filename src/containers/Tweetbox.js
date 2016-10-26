import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTweets } from '../../actions/actions'
import CSS from '../components/AppStyles'

class TweetBox extends Component {

  componentWillMount() {
    this.props.fetchTweets()
  }

  _renderTweets(tweetsHash) {

    var sortedIndexKeys = Object.keys(tweetsHash).sort(function(a, b) { return b - a })

    //create an array of tweets
    var sortedTweets = sortedIndexKeys.map(function(indexKey){
      return {id: indexKey, status: tweetsHash[indexKey].text}
    })
    console.log('tell me about sortedTweets: ', sortedTweets)
    //return jsx elements
    return sortedTweets.map(function(tweet){
      return (
        <tr key={tweet.id} className="tweet" style={CSS.tweet}>
          <td>{tweet.status}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <table>
          <tbody>
            <tr><th>{this.props.username}</th></tr>
            {this._renderTweets(this.props.tweets)}
          </tbody>
        </table>
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