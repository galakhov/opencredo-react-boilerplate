import React from 'react';
import { IndexRoute, Route, IndexRedirect } from 'react-router';
import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent';

/* eslint camelcase: 0 */
import AppContainer from 'containers/AppContainer';
import HeroPageLayout from 'containers/HeroPageLayout';
import AdminPageLayout from 'containers/AdminPageLayout';
import LandingPage from 'pages/LandingPage/LandingPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import AboutPage_01 from 'pages/AboutPage/AboutPage_01';
import AboutPage_02 from 'pages/AboutPage/AboutPage_02';
import AboutPage_03 from 'pages/AboutPage/AboutPage_03';
import AboutPage_04 from 'pages/AboutPage/AboutPage_04';
import AboutPage_05 from 'pages/AboutPage/AboutPage_05';
/* import SpectrumPage from 'pages/SpectrumPage/SpectrumPage';
import RadiologiePage from 'pages/SpectrumPage/RadiologiePage';
import HerzMRTPage from 'pages/SpectrumPage/HerzMRTPage';
import AngiographiePage from 'pages/SpectrumPage/AngiographiePage';
import HerzCTPage from 'pages/SpectrumPage/HerzCTPage';
import KardioDiagnostikPage from 'pages/SpectrumPage/KardioDiagnostikPage';*/

/* eslint camelcase: 0 */
import RoentgenPage from 'pages/SpectrumPage/RoentgenPage';
import CTPage from 'pages/SpectrumPage/CTPage';
import MRTPage from 'pages/SpectrumPage/MRTPage';
// import UltraschallPage from 'pages/SpectrumPage/UltraschallPage';
// import MammographiePage from 'pages/SpectrumPage/MammographiePage';
// import NuklearmedizinPage from 'pages/SpectrumPage/NuklearmedizinPage';
import SchmerztherapiePage from 'pages/SpectrumPage/SchmerztherapiePage';
import PatientenPage from 'pages/PatientenPage/PatientenPage';
import ImpressumPage from 'pages/ImpressumPage/ImpressumPage';
import JobsPage from 'pages/JobsPage/JobsPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import PraxisPage from 'pages/PraxisPage/PraxisPage';

import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';

// TODO: [] /spectrum/ routes do not work in production.
export default(
  // Route components without path will render their children...
  <Route component={AppContainer}>
    // until a match is found...
    <Route component={HeroPageLayout}>
      // here
      <Route path="/" component={LandingPage} />
      // Routes without a component will render their children:
      //<Route path="/pages" >
        <IndexRedirect to="/praxis" />
        <Route path="/praxis" component={PraxisPage} />
        <Route path="/team">
          <IndexRoute component={AboutPage} />
          <Route path="dabir" component={AboutPage_01} />
          <Route path="hirning" component={AboutPage_02} />
          <Route path="poll" component={AboutPage_03} />
          <Route path="dabir-scherfeld" component={AboutPage_04} />
          <Route path="meyer" component={AboutPage_05} />
        </Route>
        {
          /*
          <Route path="/spectrum" component={SpectrumPage}>
            <Route path="/spectrum/radiologie" component={RadiologiePage} />
            <Route path="/spectrum/mrt" component={MRTPage} />
            <Route path="/spectrum/herz-mrt" component={HerzMRTPage} />
            <Route path="/spectrum/angiographie" component={AngiographiePage} />
            <Route path="/spectrum/ct" component={CTPage} />
            <Route path="/spectrum/herz-ct" component={HerzCTPage} />
            <Route path="/spectrum/kardio-diagnostik" component={KardioDiagnostikPage} />
            <Route path="/spectrum/roentgen" component={RoentgenPage} />
            <Route path="/spectrum/ultraschall" component={UltraschallPage} />
            <Route path="/spectrum/mammographie" component={MammographiePage} />
            <Route path="/spectrum/nuklearmedizin" component={NuklearmedizinPage} />
            <Route path="/spectrum/schmerztherapie" component={SchmerztherapiePage} />
          </Route>
          */
        }

        <Route path="/leistungen">
          <IndexRoute component={PatientenPage} />
          <Route path="roentgen" component={RoentgenPage} />
          <Route path="ct" component={CTPage} />
          <Route path="prt" component={SchmerztherapiePage} />
          <Route path="mrt" component={MRTPage} />
        </Route>
        <Route path="/karriere" component={JobsPage} />
        <Route path="/galerie" component={GalleryPage} />
      //</Route>
        <Route path="/impressum" component={ImpressumPage} />
        <Route path="/kontakt" component={ImpressumPage} />
    </Route>

    <Route path="/account" component={AdminPageLayout}>
      <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
    </Route>
  </Route>
);
