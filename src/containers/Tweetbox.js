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
      <tr key={tweet.id} className="tweet">
        <td>{tweet.text}</td>
      </tr>
    )
  }

  render() {
    console.log('my current props', this.props)
    return (
      <aside className="aside aside-2" style={CSS.aside2}>
        <table>
          <tbody>
            <tr><th>tweets</th></tr>
       
          </tbody>
        </table>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { username: state.username, tweets: state.tweets}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchTweets }, dispatch)
// }

export default connect(mapStateToProps)(TweetBox)