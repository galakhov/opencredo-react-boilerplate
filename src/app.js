import React from 'react';
import { render } from 'react-dom';
// import { browserHistory } from 'react-router';
// importing 'history' since it must be the same instance as that passed to redux middleware.
// import configureStore, { history } from './redux/configure-store';
// import routes from './routes';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';

import Root from './containers/Root';
import debug from 'debug';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData(en);
addLocaleData(es);

if (__DEBUG__) {
  debug.enable('app:*');
}

// const store = configureStore(); // , browserHistory

// Render the React application to the DOM
// ReactDOM.render(
// <Root history={browserHistory}
// <Root ... routes={routes}
// <Root store={store} history={history} routes={routes} />

render(
  <Root />,
  document.getElementById('root'),
);
