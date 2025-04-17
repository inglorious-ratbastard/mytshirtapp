import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './store/reducers/mainReducer';
import { Provider } from 'react-redux'; 
import { thunk } from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk)); 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
