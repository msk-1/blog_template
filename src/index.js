import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Content from './components/Content'
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import createStore from './createStore';
import Category from './components/Category'
import Header from './components/Header'
import Search from './components/Search'

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Category />
    <Content />
    <Profile />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();