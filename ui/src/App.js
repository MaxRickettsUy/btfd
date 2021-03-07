import React from 'react';
import configureStore from './store'
import {Provider} from 'react-redux'
import './App.css';
import DarkThemeProvider from './DarkThemeProvider';

function App(){
  return (
    <Provider store={configureStore()}>
      <DarkThemeProvider />
    </Provider>
  );
};

export default App;