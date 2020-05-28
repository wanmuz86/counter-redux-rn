import React from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import Home from './components/Home'
export default function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}
