import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './shared/store';
import FileLoader from './MainPage/FileLoader';
import MainPage from './MainPage';

ReactDOM.render(
  <Provider store={store}>
    <FileLoader />
  </Provider>, document.getElementById('file-loader'));

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>, document.getElementById('editor'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
