import React, { PropTypes } from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
// import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
// import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { loginRequest, logoutRequest } from 'redux/modules/auth/auth-actions';
import debug from 'debug';
// import LanguageSelectionDropdown from '../LanguageSelectionDropdown/LanguageSelectionDropdown';
import { links } from 'shared/links';
import styles from './MainHeader.scss';

if (__DEBUG__) {
  debug.enable('app:*');
}

const log = debug('app:main-header');

class MainHeader extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  @autobind
  onLogin() {
    this.props.dispatch(loginRequest());
  }

  @autobind
  onLogout() {
    this.props.dispatch(logoutRequest());
  }

  willReceiveProps(props) {
    log('main-header will receive props', props);
  }

  render() {
    return (
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FormattedMessage {...links.startPage} />
              <img src="/images/radiologie_logo.png" />
              { /* The above is equivalent to
                <FormattedMessage id={links.home.id}
                                  description={links.home.description}
                                  defaultMessage={links.home.defaultMessage} /> */ }
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <li role="presentation">
              <Link activeClassName="active" to="/praxis">
                <FormattedMessage {...links.home} />
              </Link>
            </li>

            { /* <li role="presentation">
              <Link activeClassName="active" to="/about-us">
                <FormattedMessage {...links.aboutUs} />
              </Link>
            </li> */
            }
              { /* <Link activeClassName="active" to="/spectrum">
                <FormattedMessage {...links.spectrum} />
              </Link> */ }
            { /* <NavDropdown activeClassName="active" eventKey="/spectrum" title="Behandlungsspektrum" id="nav-dropdown">
              <MenuItem eventKey="/spectrum" href="/spectrum"><FormattedMessage {...links.spectrum} /></MenuItem>
              <MenuItem eventKey="/spectrum/radiologie" href="/spectrum/radiologie"><FormattedMessage {...links.spectrum_radiologie} /></MenuItem>
              <MenuItem eventKey="/spectrum/mrt" href="/spectrum/mrt"><FormattedMessage {...links.spectrum_mrt} /></MenuItem>
              <MenuItem eventKey="/spectrum/herz-mrt" href="/spectrum/herz-mrt"><FormattedMessage {...links.spectrum_herz} /></MenuItem>
              <MenuItem eventKey="/spectrum/angiographie" href="/spectrum/angiographie"><FormattedMessage {...links.spectrum_angiographie} /></MenuItem>
              <MenuItem eventKey="/spectrum/ct" href="/spectrum/ct"><FormattedMessage {...links.spectrum_ct} /></MenuItem>
              <MenuItem eventKey="/spectrum/herz-ct" href="/spectrum/herz-ct"><FormattedMessage {...links.spectrum_herz_ct} /></MenuItem>
              <MenuItem eventKey="/spectrum/kardio-diagnostik" href="/spectrum/kardio-diagnostik"><FormattedMessage {...links.spectrum_kardio} /></MenuItem>
              <MenuItem eventKey="/spectrum/roentgen" href="/spectrum/roentgen"><FormattedMessage {...links.spectrum_roentgen} /></MenuItem>
              <MenuItem eventKey="/spectrum/ultraschall" href="/spectrum/ultraschall"><FormattedMessage {...links.spectrum_ultraschall} /></MenuItem>
              <MenuItem eventKey="/spectrum/mammographie" href="/spectrum/mammographie"><FormattedMessage {...links.spectrum_mammographie} /></MenuItem>
              <MenuItem eventKey="/spectrum/nuklearmedizin" href="/spectrum/nuklearmedizin"><FormattedMessage {...links.spectrum_nuklearmedizin} /></MenuItem>
              <MenuItem eventKey="/spectrum/schmerztherapie" href="/spectrum/schmerztherapie"><FormattedMessage {...links.spectrum_schmerztherapie} /></MenuItem>
              { // <MenuItem divider /> }
            </NavDropdown> */
            }
            <li role="presentation">
              <Link activeClassName="active" to="/leistungen">
                <FormattedMessage {...links.service} />
              </Link>
            </li>
            {
              /*
              <li role="presentation">
                <Link activeClassName="active" to="/karriere">
                  <FormattedMessage {...links.jobs} />
                </Link>
              </li>
              <li role="presentation">
                <Link activeClassName="active" to="/galerie">
                  <FormattedMessage {...links.gallery} />
                </Link>
              </li>
              */
            }
            <li role="presentation">
              <Link activeClassName="active" to="/kontakt">
                <FormattedMessage {...links.kontakt} />
              </Link>
            </li>

            { /* this.props.isAuthenticated && this.props.user ?
              <UserDropdownMenu user={this.props.user} logout={this.onLogout} />
              :
              <li role="presentation">
                <a onClick={this.onLogin}>
                  <FormattedMessage {...links.logIn} />
                </a>
              </li>
            */ }

            { /* <LanguageSelectionDropdown /> */ }
          </Nav>
        </Navbar.Collapse>
        <div className={styles['radiologie-contact']}><FormattedHTMLMessage {...links.radiologie_contact} /></div>
        <div className={styles['header-line']}></div>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
  language: state.language,
});

export default connect(mapStateToProps)(MainHeader);
