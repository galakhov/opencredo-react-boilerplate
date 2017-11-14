import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-103785976-1');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends Component {

    static propTypes = {
      location: PropTypes.object.isRequired,
      // store: PropTypes.object.isRequired,
      // routes: PropTypes.element.isRequired,
    };

    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
