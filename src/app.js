import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './redux/configure-store';
import routes from './routes';
import Root from './containers/Root';
import debug from 'debug';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
//  TODO: [ ] history warning. Not fixed. https://github.com/ReactTraining/react-router/issues/3387#issue-151180128
//  OR: https://github.com/ReactTraining/react-router/issues/4055

//  [x] devTools warning fixed in /redux/configure-store.js: https://github.com/nicksp/redux-webpack-es6-boilerplate/issues/5

addLocaleData(en);
addLocaleData(es);

if (__DEBUG__) {
  debug.enable('app:*');
}

const store = configureStore({}, browserHistory);

// Render the React application to the DOM
ReactDOM.render(
  <Root history={browserHistory} store={store} routes={routes} />,
  document.getElementById('root'),
);
