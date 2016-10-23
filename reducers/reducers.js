import { combineReducers } from 'redux'
import { greeting } from './reducerGreeting'
import tweets from './reducerTweets'

export default combineReducers({
  twitterFeed: tweets,
  greeting
})