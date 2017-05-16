import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent';

import AppContainer from 'containers/AppContainer';
import HeroPageLayout from 'containers/HeroPageLayout';
import AdminPageLayout from 'containers/AdminPageLayout';
import LandingPage from 'pages/LandingPage/LandingPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import SpectrumPage from 'pages/SpectrumPage/SpectrumPage';
import RadiologiePage from 'pages/SpectrumPage/RadiologiePage';
import MRTPage from 'pages/SpectrumPage/MRTPage';
import HerzMRTPage from 'pages/SpectrumPage/HerzMRTPage';
import AngiographiePage from 'pages/SpectrumPage/AngiographiePage';
import CTPage from 'pages/SpectrumPage/CTPage';
import HerzCTPage from 'pages/SpectrumPage/HerzCTPage';
import KardioDiagnostikPage from 'pages/SpectrumPage/KardioDiagnostikPage';
import RoentgenPage from 'pages/SpectrumPage/RoentgenPage';
import UltraschallPage from 'pages/SpectrumPage/UltraschallPage';
import MammographiePage from 'pages/SpectrumPage/MammographiePage';
import NuklearmedizinPage from 'pages/SpectrumPage/NuklearmedizinPage';
import SchmerztherapiePage from 'pages/SpectrumPage/SchmerztherapiePage';
import PatientenPage from 'pages/PatientenPage/PatientenPage';
import ImpressumPage from 'pages/ImpressumPage/ImpressumPage';

import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';

export default(
  // Route components without path will render their children...
  <Route component={AppContainer}>
    // until a match is found...
    <Route component={HeroPageLayout}>
      // here
      <Route path="/" component={LandingPage} />
      // Routes without a component will render their children:
      //<Route path="/pages" >
        <IndexRedirect to="/about-us" />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/spectrum" component={SpectrumPage} />
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

        <Route path="/patientenservice" component={PatientenPage} />
      //</Route>
        <Route path="/impressum" component={ImpressumPage} />
    </Route>

    <Route path="/account" component={AdminPageLayout}>
      <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
    </Route>
  </Route>
);
