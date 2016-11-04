import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import { middleware, reducers, routes } from './config';
import localStorage, { loadState } from './config/localStorage';

const store = createStore(reducers, loadState(), middleware);
const history = syncHistoryWithStore(browserHistory, store);

// Subscribe saveState function to changes in the store
localStorage(store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('app'));
