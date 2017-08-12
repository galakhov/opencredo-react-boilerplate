import React from 'react';
// import { IndexRedirect } from 'react-router';
import { Route, Switch } from 'react-router-dom'; // , Match, withRouter
// import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent';

/* eslint camelcase: 0 */
import AppContainer from 'containers/AppContainer';
import HeroPageLayout from 'containers/HeroPageLayout';
// import AdminPageLayout from 'containers/AdminPageLayout';
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
// import JobsPage from 'pages/JobsPage/JobsPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import PraxisPage from 'pages/PraxisPage/PraxisPage';

// import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';

// route config
/* const routes = [
  {
    path: '/radiologie',
    exact: true,
    component: LandingPage,
  },
  {
    path: '/praxis',
    component: PraxisPage,
  },
  {
    path: '/team',
    component: AboutPage,
    routes: [
      {
        path: '/team-dabir',
        component: AboutPage_01,
      },
      {
        path: '/team-hirning',
        component: AboutPage_02,
      },
      {
        path: '/team-poll',
        component: AboutPage_03,
      },
      {
        path: '/team-dabir-scherfeld',
        component: AboutPage_04,
      },
      {
        path: '/team-meyer',
        component: AboutPage_05,
      },
    ],
  },
  {
    path: '/leistungen',
    component: PatientenPage,
    routes: [
      {
        path: 'leistungen/roentgen',
        component: RoentgenPage,
      },
      {
        path: 'leistungen/ct',
        component: CTPage,
      },
      {
        path: 'leistungen/prt',
        component: SchmerztherapiePage,
      },
      {
        path: 'leistungen/mrt',
        component: MRTPage,
      },
    ],
  },
  {
    path: '/karriere',
    component: JobsPage,
  },
  {
    path: '/galerie/',
    component: GalleryPage,
  },
  {
    path: '/impressum',
    component: ImpressumPage,
  },
  {
    path: '/kontakt',
    component: ImpressumPage,
  },
]; */

// wrap <Route> and use this everywhere instead, then when sub routes are added to any route it'll work
/* const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render = { props => (
      // match.url +
      // pass the sub-routes down to keep nesting
      <route.component {...props } routes={route.routes} />
    )}
    />
); */
// https://reacttraining.com/react-router/web/example/recursive-paths

export default (
  // Route components without path will render their children...
  <AppContainer>
    <HeroPageLayout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/praxis" component={PraxisPage} />
        <Route path="/team" component={AboutPage}>
          <Route path="/team/dabir" component={AboutPage_01} />
          <Route path="/team/hirning" component={AboutPage_02} />
          <Route path="/team/poll" component={AboutPage_03} />
          <Route path="/team/dabir-scherfeld" component={AboutPage_04} />
          <Route path="/team/meyer" component={AboutPage_05} />
        </Route>
        <Route path="/leistungen" component={PatientenPage}>
          <Route path="/leistungen/roentgen" component={RoentgenPage} />
          <Route path="/leistungen/ct" component={CTPage} />
          <Route path="/leistungen/prt" component={SchmerztherapiePage} />
          <Route path="/leistungen/mrt" component={MRTPage} />
        </Route>
        <Route path="/galerie" component={GalleryPage} />
        <Route path="/impressum" component={ImpressumPage} />
        <Route path="/kontakt" component={ImpressumPage} />

        { /* routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        )) */ }
      </Switch>
    </HeroPageLayout>
  </AppContainer>
);

  /*
  <Route path="/account" component={AdminPageLayout}>
    <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
  </Route>
  <Route path='*' component={NotFoundView}/>
  */
