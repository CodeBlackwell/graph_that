import { FETCH_TWEETS } from '../actions/actions'


const initialState = {
  username: 'TheStylisted',
  tweets: {},
  oldestTweetId: ''
}

//creates a hash of tweets indexed by id
function indexTweets(arrOfTweets) {
  var indexedTweets = {}
  arrOfTweets.forEach(tweet => {
    indexedTweets[tweet.id] = { created_at: tweet.created_at, id: tweet.id, text: tweet.text }
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
        tweets: Object.assign({}, state.tweets, indexTweets(action.payload.data)),
        oldestTweetId: Object.keys(indexTweets(action.payload.data)).sort((a, b) => b - a)[0]
      })
    }
  }

  if (reducerOperations[action.type]) {
    return reducerOperations[action.type]()
  }
  return state
}

