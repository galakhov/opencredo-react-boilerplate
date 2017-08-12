import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// If your application is hosted on a static file server, you need to use a <HashRouter>.
// import { HashRouter as Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import ReactGA from 'react-ga';
// import { browserHistory } from 'react-router';

// Initialize Google Analytics tracking
ReactGA.initialize('UA-103785976-1');

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

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

  logPageView = () => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  // <Router history={this.state.history}
  // this.context.history.push('/path')
  // <Router history={browserHistory}
  // history={this.props.history}
  // store={this.props.store}
  // {this.devTools}

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
            <Router history={history} onUpdate={this.logPageView}>
              {this.props.routes}
            </Router>
        </div>
      </Provider>
    );
  }
}
