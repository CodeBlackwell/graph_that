import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'

import Root from './root'
import rootReducer from '../reducers/reducers'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
const history = browserHistory

render(
  <Root store={store} history={history}/>, 
  document.getElementById('app')
)