import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import aiMiddleware from './middleware/ai-middleware';

const store: Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(aiMiddleware)
);

ReactDOM.render(
  <Root store={store} />, document.getElementById('app-container')
);
