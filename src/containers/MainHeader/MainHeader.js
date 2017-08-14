import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'; // , NavItem
// import { LinkContainer } from 'react-router-bootstrap'; // IndexLinkContainer,
// import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { loginRequest, logoutRequest } from 'redux/modules/auth/auth-actions';
// import RouterNavItem from 'components/RouterNavItem/RouterNavItem';
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
    // activeOnlyWhenExact: PropTypes.bool,
    selectedKey: PropTypes.number,
  };

  state = {
    selectedKey: 1,
    // activeKey: 1,
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

  /* handleSelect(selectedKey) { // , event
    // event.preventDefault();
    // alert('selected ' + selectedKey);
    this.setState({activeKey: selectedKey});
  } */

  handleSelect = (activeKey) => {
    if (activeKey === null) {
      this.setState({ selectedKey: 1 });
    }
    this.setState({ selectedKey: activeKey });
  }

  render() {
    // let selectedKey = 1;

    /* const oldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}<Link to={to}>{label}</Link>
        </div>
      )}
      />
    ); */

    return (
      <Navbar staticTop fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
              <MenuItem to="/" href="/">
                  <FormattedMessage {...links.startPage} />
                  <img src="/images/radiologie_logo.png" />
              </MenuItem>
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            {
              /* activeKey={ this.state.selectedKey } onSelect={ this.handleSelect } */
              /*
              <IndexLinkContainer activeOnlyWhenExact to="/" activeClassName="active">
                <NavItem to="/" activeClassName="active">
                  <FormattedMessage {...links.startPage} />
                </NavItem>
              </IndexLinkContainer>

              <RouterNavItem eventKey={1} to="/company">Company</RouterNavItem>
              <RouterNavItem eventKey={2} to="/team">Team</RouterNavItem>
              <RouterNavItem eventKey={3} to="/services">Services</RouterNavItem>
              <RouterNavItem eventKey={4} to="/contact">Contact</RouterNavItem>

              <LinkContainer activeOnlyWhenExact to="/praxis" activeClassName="active">

              <li role="presentation" class="">

              <RouterNavItem eventKey={1} to="/praxis" role="presentation">
                <FormattedMessage {...links.home} />
              </RouterNavItem>

              </LinkContainer>
              <LinkContainer activeOnlyWhenExact to="/team" activeClassName="active">
              */
            }

            <NavDropdown eventKey={1} id="nav-dropdown-0" title="Praxis" className="nav-dropdown">
              <MenuItem eventKey={1.1} href="/praxis"><FormattedMessage {...links.home} /></MenuItem>
              <MenuItem eventKey={1.2} href="/kontakt"><FormattedMessage {...links.kontakt} /></MenuItem>
              <MenuItem eventKey={1.3} href="/anfahrt"><FormattedMessage {...links.anfahrt} /></MenuItem>
            </NavDropdown>

            <MenuItem eventKey={2} href="/team" role="presentation">
                <FormattedMessage {...links.aboutUs} />
            </MenuItem>
            { /*
              </LinkContainer>
             <NavDropdown activeClassName="active" eventKey="/spectrum" title="Behandlungsspektrum" ClassName="nav-dropdown">
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
            <NavDropdown eventKey={3} id="nav-dropdown" title="Behandlungsspektrum" className="nav-dropdown">
              <MenuItem eventKey={3.1} href="/leistungen"><FormattedMessage {...links.service} /></MenuItem>
              <MenuItem eventKey={3.2} href="/leistungen-roentgen"><FormattedMessage {...links.leistungen_roentgen} /></MenuItem>
              <MenuItem eventKey={3.3} href="/leistungen-ct"><FormattedMessage {...links.leistungen_ct} /></MenuItem>
              <MenuItem eventKey={3.4} href="/leistungen-prt"><FormattedMessage {...links.leistungen_prt} /></MenuItem>
              <MenuItem eventKey={3.5} href="/leistungen-mrt"><FormattedMessage {...links.leistungen_mrt} /></MenuItem>
            </NavDropdown>
            {
              /*
              <li role="presentation">
                <Link activeClassName="active" to="/karriere">
                  <FormattedMessage {...links.jobs} />
                </Link>
              </li>

              <LinkContainer activeOnlyWhenExact eventKey={4} to="/galerie" activeClassName="active">

              <MenuItem href="/galerie" eventKey={4} role="presentation">
                  <FormattedMessage {...links.gallery} />
              </MenuItem>
              */
            }
            <MenuItem eventKey={4} href="/galerie">
              <FormattedMessage {...links.gallery} />
            </MenuItem>
            { /*
              <RouterNavItem eventKey={4} to="/galerie" role="presentation">
                  <FormattedMessage {...links.gallery} />
              </RouterNavItem>
              </LinkContainer>
              this.props.isAuthenticated && this.props.user ?
              <UserDropdownMenu user={this.props.user} logout={this.onLogout} />
              :
              <li role="presentation">
                <a onClick={this.onLogin}>
                  <FormattedMessage {...links.logIn} />
                </a>
              </li>
              <LanguageSelectionDropdown /> */ }
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
  selectedKey: state.selectedKey,
});

export default connect(mapStateToProps)(MainHeader);
