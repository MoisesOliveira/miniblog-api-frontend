import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Users from './components/Users';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Register from './components/Register';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/login' exact={true} component={Login} />
      <Route path='/home' exact={true} component={Users} />
      <Route path='/register' exact={true} component={Register} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
