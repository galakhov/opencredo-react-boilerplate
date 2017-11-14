import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
// If your application is hosted on a static file server, you need to use a <HashRouter>.
// import { HashRouter as Router } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'react-router-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';

/*
if you need to synchronize the history with a state management lib like Redux (more on that later), you have to keep using the <Router> component, and pass a historyobject coming, this time, from the history package: https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a
*/

import configureStore, { history } from '../redux/configure-store';
/* eslint camelcase: 0 */
import AppContainer from 'containers/AppContainer';
import HeroPageLayout from 'containers/HeroPageLayout';

// import GAListener from 'containers/gaListener';
// import { browserHistory } from 'react-router';

import ReactGA from 'react-ga';
// Initialize Google Analytics tracking
ReactGA.initialize('UA-103785976-1');

const store = configureStore();

export default class Root extends React.Component {

  static propTypes = {
    // history: PropTypes.object.isRequired,
    // store: PropTypes.object.isRequired,
    // routes: PropTypes.element.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    // this.sendPageView(this.context.router.history.location);
    // this.context.router.history.listen(this.sendPageView);
  }

  /*
  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }
  */

  /* constructor(props) {
    super(props);
    props.history.push('/');
  } */

  /* state = {
    // history: browserHistory.push('/'),
    // TODO: fix: https://github.com/ReactTraining/react-router/issues/4640
    // issue: https://github.com/reactjs/react-router-tutorial/issues/301
    // activeKey: 1,
  }; */

  // redux devtools pane
  get devTools() {
    let returnValue = <span />;

    if (DEVELOPMENT) {
      const DevTools = require('./DevTools');

      returnValue = <DevTools />;
    }

    return returnValue;
  }

  /*
  logPageView = () => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  */

  // <Router history={this.state.history}
  // this.context.history.push('/path')
  // <Router history={browserHistory}
  // history={this.props.history}
  // store={this.props.store}
  // {this.devTools}

  /*
    <Router history={history} onUpdate={this.logPageView}>
      {this.props.routes}
    </Router>
  */

  render() {
    // const { store } = this.props; // , history
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <AppContainer>
            <Router history={history}>
              <Route path="/" component={HeroPageLayout} />
            </Router>
          </AppContainer>
        </div>
      </Provider>
    );
  }
}
