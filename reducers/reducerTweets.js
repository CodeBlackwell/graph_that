import { FETCH_TWEETS } from '../actions/actions'

const initialState = {
  username: 'Pinky and/or The Brain',
  tweets: [{status: 'We must take over the world', id: 219230}]
}

export function tweets(state = initialState, action) {

  const reducer = {
    FETCH_TWEETS: function(){
      return Object.assign({}, state, {
        username: action.payload.data[0].user.screen_name,
        tweets: action.payload.data.map(tweet => {
          return { status: tweet.text, id: tweet.id}
        })
      })
    }
  }

  if(reducer[action.type]) {
    return reducer[action.type]()
  }

  return state

}
