import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent';

import AppContainer from 'containers/AppContainer';
import HeroPageLayout from 'containers/HeroPageLayout';
import AdminPageLayout from 'containers/AdminPageLayout';
import LandingPage from 'pages/LandingPage/LandingPage';
import AutosPage from 'pages/AutosPage/AutosPage';
import ServicePage from 'pages/ServicePage/ServicePage';
import MaschienenPage from 'pages/MaschienenPage/MaschienenPage';
import HallenPage from 'pages/HallenPage/HallenPage';
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import ImpressumPage from 'pages/ImpressumPage/ImpressumPage';

export default(
  // Route components without path will render their children...
  <Route component={AppContainer}>
    // until a match is found...
    <Route component={HeroPageLayout}>
      // here
      <Route path="/" component={LandingPage} />
      // Routes without a component will render their children:
      //<Route path="/pages" >
        <IndexRedirect to="/" />
        <Route path="/unternehmen" component={LandingPage} />
        <Route path="/autos" component={AutosPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/maschinen" component={MaschienenPage} />
        <Route path="/hallen" component={HallenPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/impressum" component={ImpressumPage} />
      //</Route>
    </Route>

    <Route path="/account" component={AdminPageLayout}>
      <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
    </Route>
  </Route>
);
