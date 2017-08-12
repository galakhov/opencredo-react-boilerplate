import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

class NavItemWithoutRouter extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
    activeStyle: PropTypes.object,
    activeClassName: PropTypes.string,
    activeOnlyWhenExact: PropTypes.bool,
    eventKey: PropTypes.number,
    onSelect: PropTypes.func,
  }

  constructor(props) {
    super(props);
    // props.history.push('/');
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(path) {
    // console.log('TO: '+ path);
    // <NavItemonClick={ this.handleLink(to) }
    this.props.history.push(path);
  }

  render() {
    const { to, eventKey, children, onSelect } = this.props;
    // active={location.pathname === to}
    return (
      <NavItem eventKey={eventKey} onSelect={onSelect} onClick={ this.handleLink(to) }>
          {children}
      </NavItem>
    );
  }
}

const RouterNavItem = withRouter(NavItemWithoutRouter);
export default RouterNavItem;
