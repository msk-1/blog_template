import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Content from './components/Content'
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import createStore from './createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Content />
    <Profile/>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();