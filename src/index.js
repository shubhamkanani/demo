import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import Data from './Data'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer'
import Register from './PAGES/Register'
import Loginsuccess from './PAGES/Loginsuccess'
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const store = createStore(Reducer,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
      <Route path={'/'} component={App} exact/>
      <Route path={"/data"} component={Data} exact/>
      <Route path={'/register'} component={Register} exact />
      <Route path={'/loginsuccess'} component={Loginsuccess} exact />
    </Switch>
  </Router></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
