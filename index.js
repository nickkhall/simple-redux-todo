import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './src/js/components/app';
import reducers from './src/js/reducers/index';

import './src/styles/main.scss';

ReactDOM.render(
  <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>
  , document.getElementById('app')
);
