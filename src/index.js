import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Contents from './components/Contents'
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import createStore from './createStore';
import Category from './components/Category'
import Header from './components/Header'
import styled from 'styled-components';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Category />
    <Contents />
    <Profile />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();