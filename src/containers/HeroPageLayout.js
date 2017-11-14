import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import withTracker from 'containers/withTracker';
import Spinner from 'components/Spinner/Spinner';
// import { Match } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import PraxisPage from 'pages/PraxisPage/PraxisPage';
// import AboutPage from 'pages/AboutPage/AboutPage';
import PatientenPage from 'pages/PatientenPage/PatientenPage';
/* eslint camelcase: 0 */
import AboutPage_01 from 'pages/AboutPage/AboutPage_01';
import AboutPage_02 from 'pages/AboutPage/AboutPage_02';
import AboutPage_03 from 'pages/AboutPage/AboutPage_03';
import AboutPage_04 from 'pages/AboutPage/AboutPage_04';
import AboutPage_05 from 'pages/AboutPage/AboutPage_05';
import RoentgenPage from 'pages/SpectrumPage/RoentgenPage';
import CTPage from 'pages/SpectrumPage/CTPage';
import MRTPage from 'pages/SpectrumPage/MRTPage';
import SchmerztherapiePage from 'pages/SpectrumPage/SchmerztherapiePage';
import ImpressumPage from 'pages/ImpressumPage/ImpressumPage';
import AnfahrtPage from 'pages/AnfahrtPage/AnfahrtPage';
import KontaktPage from 'pages/KontaktPage/KontaktPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';


const mapStateToProps = ({ spinner }) => ({ spinner });
const HeroPageLayout = (props) =>
  (
    <div className="page-container">
      <MainHeader />
      <div className="view-container">
        { /*
          <Match exactly pattern="/" component={LandingPage} />
          <Match exactly pattern="/praxis" component={PraxisPage} />
          <Match exactly pattern="/team" component={AboutPage} />
          <Match exactly pattern="/leistungen" component={PatientenPage} />
          */
        }
        <Switch>
          { /*
          <Route path="/posts" component={PostList} />
          <Route path="/posts/:id" component={PostEdit} />
          <Route path="/posts/:id/show" component={PostShow} />
          <Route path="/posts/:id/delete" component={PostDelete} />
          */ }
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/praxis'} component={PraxisPage} />

            <Route exact path={'/team-dabir'} component={AboutPage_01} />
            <Route exact path={'/team-hirning'} component={AboutPage_02} />
            <Route exact path={'/team-poll'} component={AboutPage_03} />
            <Route exact path={'/team-dabir-scherfeld'} component={AboutPage_04} />
            <Route exact path={'/team-meyer'} component={AboutPage_05} />

          <Route exact path={'/leistungen'} component={PatientenPage} />
            <Route exact path={'/leistungen-roentgen'} component={RoentgenPage} />
            <Route exact path={'/leistungen-ct'} component={CTPage} />
            <Route exact path={'/leistungen-prt'} component={SchmerztherapiePage} />
            <Route exact path={'/leistungen-mrt'} component={MRTPage} />

          <Route exact path={'/galerie'} component={GalleryPage} />
          <Route exact path={'/impressum'} component={ImpressumPage} />
          <Route exact path={'/kontakt'} component={KontaktPage} />
          <Route exact path={'/anfahrt'} component={AnfahrtPage} />

        </Switch>

        { /* {props.children} */ }
      </div>
      <MainFooter />
      <Spinner
        canShow={props.spinner.canShow}
        messageId={props.spinner.messageId}
      />
    </div>
  );

HeroPageLayout.propTypes = {
  spinner: PropTypes.object,
  // children: PropTypes.array,
};

export default withTracker(connect(mapStateToProps)(HeroPageLayout));
