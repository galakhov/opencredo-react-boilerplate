import React, { Component } from 'react'; // PropTypes,
// import { Link } from 'react-router';
import { connect } from 'react-redux';

class Sidebar extends Component {
  /* static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    isAdmin: PropTypes.bool,
  };*/

  render() {
    return (
      <ul className="aside">
        <li>
        {
            /*
              <a className="facebook_gura" href="https://www.facebook.com/pages/Gura-Foerdertechnik-GmbH/257175027773612" target="_blank"><img src="images/facebook_gura.png" /></a>&nbsp;&nbsp;&nbsp;
              <a className="twitter_gura" href="https://www.facebook.com/pages/Gura-Foerdertechnik-GmbH/257175027773612" target="_blank"><img src="images/twitter_gura.png" /></a>
            */
        }
        </li>
        <li><br /><br /></li>
        <li>
          <a className="homepage_gura" href="http://www.nhse-gmbh.de" target="_blank"><img src="images/partners_gura.png" /></a>
        </li>
        {
          /*
          <li>
            <Link to="/profile" activeClassName="active">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/profile/spaces" activeClassName="active">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/profile/Profile" activeClassName="active">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/favourites" activeClassName="active">
              Favourites
            </Link>
          </li>
          */
        }
      </ul>
    );
  }
}


const mapStateToProps = () => ({ // state
  // isAuthenticated: state.auth.isAuthenticated,
  // isAdmin: state.auth.isAdmin,
  // user: state.user,
});


export default connect(mapStateToProps)(Sidebar);
