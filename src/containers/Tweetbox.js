import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTweets } from '../../actions/actions'
import CSS from '../components/AppStyles'

class TweetBox extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTweets())
  }

  renderTweet(tweet) {
    return (
      <tr key={tweet.id} className="tweet" style={CSS.tweet}>
        <td>{tweet.status}</td>
      </tr>
    )
  }

  render() {
    console.log('my current props', this.props)
    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <table>
          <tbody>
            <tr><th>{this.props.username}</th></tr>
            {this.props.tweets.map(this.renderTweet)}
          </tbody>
        </table>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { username: state.twitterFeed.username, tweets: state.twitterFeed.tweets }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchTweets }, dispatch)
// }

export default connect(mapStateToProps)(TweetBox)