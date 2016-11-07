import axios from 'axios'

export const GET_HELLO_WORLD   = 'GET_HELLO_WORLD',
             GET_GOODBYE_WORLD = 'GET_GOODBYE_WORLD',
             FETCH_TWEETS      = 'FETCH_TWEETS',
             FETCH_PLANE_CRASH_DATA = 'FETCH_PLANE_CRASH_DATA'

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
  const params = { max_id: oldestTweetId}

  const tweets = axios.get(URL, {params: params})
  return {
    type: FETCH_TWEETS,
    payload: tweets
  }
}

export function fetchPlaneCrashData() {
  console.log('fetching Plane Crash Data')
  const URL = 'http://localhost:3000/data/planecrashes'
  const crashData = axios.get(URL)
  return {
    type: FETCH_PLANE_CRASH_DATA,
    payload: crashData
  }
}