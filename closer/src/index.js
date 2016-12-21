import React from 'react';
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import Route from './route';
import reducers from './reducers'

const reducer = combineReducers(reducers);
const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <Route/>
  </Provider>,
  document.getElementById('root')
);
