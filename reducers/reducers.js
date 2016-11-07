import { combineReducers } from 'redux'
import { greeting } from './reducerGreeting'
import tweets from './reducerTweets'
import data from './reducerVisualizations'

export default combineReducers({
  twitterFeed: tweets,
  visualizationData: data,
  greeting
})