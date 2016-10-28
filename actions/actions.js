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

export function fetchTweets(username = 'thestylisted', oldestTweetId) {
  oldestTweetId = oldestTweetId || ''
  const URL = 'http://localhost:3000/tweets/' + username

  console.log('this is the oldest tweet id within fetchTweets', oldestTweetId)

  const params = { max_id: oldestTweetId}

  const tweets = axios.get(URL, {params: params})
  return {
    type: FETCH_TWEETS,
    payload: tweets
  }
}
