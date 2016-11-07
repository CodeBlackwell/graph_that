import { FETCH_PLANE_CRASH_DATA } from '../actions/actions'


const initialState = {planeCrashData: []}


export default (state = initialState, action) => {

  const reducerOperations = {

    FETCH_PLANE_CRASH_DATA() {
      return Object.assign({}, state, {
        planeCrashData: action.payload.data
      })
    }
  }

  if (reducerOperations[action.type]) {
    return reducerOperations[action.type]()
  }
  return state
}
