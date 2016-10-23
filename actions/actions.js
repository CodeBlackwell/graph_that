import axios from 'axios'

export const GET_HELLO_WORLD   = 'GET_HELLO_WORLD',
             GET_GOODBYE_WORLD = 'GET_GOODBYE_WORLD',
             FETCH_TWEETS      = 'FETCH_TWEETS'

export function getHelloWorld() {
  return {
    type: GET_HELLO_WORLD
  }
}

export function getGoodbyeWorld() {
  return {
    type: GET_GOODBYE_WORLD
  }
}

export function fetchTweets(params = 'thestylisted') {
  const URL = 'localhost:3000/tweets/' + params.screen_name
  const tweets = axios.get(URL)

  return {
    type: FETCH_TWEETS,
    payload: tweets
  }
}
