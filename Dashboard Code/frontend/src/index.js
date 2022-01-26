import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import './index.css';
import App from './App';
import { Log, VisualizerProvider } from 'react-lifecycle-visualizer';

require('dotenv').config();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
