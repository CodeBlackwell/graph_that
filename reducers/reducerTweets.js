import { FETCH_TWEETS } from '../actions/actions'

export function tweets(state = {
  username: 'Pinky and/or The Brain',
  tweets: [{status: 'We must take over the world', id: 219230}]
}, action) {
  switch(action.type){
  case FETCH_TWEETS:
    return Object.assign({}, state, {
      username: action.payload.data[0].user.screen_name,
      tweets: action.payload.data.map(tweet => { 
        return { status: tweet.text, id: tweet.id }
      })
    })
  }

  return state

}