import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import createHistory from 'history/createBrowserHistory';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// 'routerMiddleware': the new way of storing route changes with redux middlware since react-router-V4.
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
// import { syncHistory } from 'react-router-redux';

export const history = createHistory();

/* function withDevTools(middleware) {
  const devTools = require('../containers/DevTools').instrument();
  return compose(middleware, devTools);
} */

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  /* if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  } */

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

/* export default function configureStore(initialState, browserHistory) {
  const routerMiddleware = syncHistory(browserHistory);

  let middleware = applyMiddleware(thunk, routerMiddleware);

  if (__DEBUG__) {
    // use devtools in debug environment
    middleware = withDevTools(middleware);
  }

  const store = middleware(createStore)(rootReducer, initialState);

  if (__DEBUG__) {
    // listen for route replays (devtools)
    routerMiddleware.listenForReplays(store);
  }

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
} */
