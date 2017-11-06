import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import Store from './Store/Store';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
