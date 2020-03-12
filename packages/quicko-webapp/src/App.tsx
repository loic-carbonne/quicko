import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './shared/store';
import MainPage from './MainPage'

function App() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

export default App;
