import { FETCH_TWEETS } from '../actions/actions'

export function tweets(state = {
  username: 'Pinky and/or The Brain',
  tweets: []
}, action) {
  console.log('This is the tweet action payload', action.payload)
  switch(action.type){
  case FETCH_TWEETS:
    return Object.assign({}, state, {
      username: action.payload.data[0],
      tweets: action.payload.data.map(tweet => tweet.text)
    })
  }

  return state

}