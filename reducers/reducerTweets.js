import { FETCH_TWEETS } from '../actions/actions'
import exampleTweet from '../test/exampleTweet'

const exampleTweetId = exampleTweet.id



const initialState = {
  username: exampleTweet.user.screen_name,
  tweets: {0: exampleTweet}
}

//creates a hash of tweets indexed by id
function indexTweets(arrOfTweets) {
  var indexedTweets = {}
  arrOfTweets.forEach(tweet => {
    indexedTweets[tweet.id] = tweet
  })
  return indexedTweets
}

export default (state = initialState, action) => {

  const reducerOperations = {

    FETCH_TWEETS() {
      const username = action.payload.data[0].user.screen_name

      //clear the tweetHash if not the same user
      if (username !== state.username) {
        state.tweets = {}
      }

      return Object.assign({}, state, {
        username,
        tweets: Object.assign({}, state.tweets, indexTweets(action.payload.data))
      })
    }
  }

  if (reducerOperations[action.type]) {
    return reducerOperations[action.type]()
  }
  return state
}

