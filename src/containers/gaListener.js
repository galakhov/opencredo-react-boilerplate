import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class GAListener extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    const { children } = this.props;
    // return props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default GAListener;
