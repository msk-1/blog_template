import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './components/Content';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import createStore from './createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Content />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();