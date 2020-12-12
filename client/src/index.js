import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStore from './Redux/store/ReduxStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const {store, persistor} = ReduxStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);
