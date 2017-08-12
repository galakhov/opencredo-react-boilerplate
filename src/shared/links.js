import config from 'app-config';

export const links = {
  startPage: {
    to: '/',
    id: 'navigation.start',
    description: 'Startseite',
    defaultMessage: 'Landing Page',
  },

  home: {
    to: '/praxis',
    id: 'navigation.home',
    description: 'Praxis',
    defaultMessage: config.name,
  },

  aboutUs: {
    to: '/team',
    id: 'navigation.aboutUs',
    description: 'Team',
    defaultMessage: 'Team',
  },

  leistungen: {
    to: '/leistungen/',
    id: 'navigation.leistungen',
    description: 'Übersicht Link',
    defaultMessage: 'Unsere Leistungen',
  },

  leistungen_radiologie: {
    to: '/leistungen-radiologie',
    id: 'navigation.leistungen.radiologie',
    description: 'Radiologie Link',
    defaultMessage: 'Radiologie',
  },

  leistungen_mrt: {
    to: '/leistungen-mrt',
    id: 'navigation.leistungen.mrt',
    description: 'Magnetresonanztomographie (MRT) Link',
    defaultMessage: 'Magnetresonanztomographie (MRT)',
  },

  leistungen_ct: {
    to: '/leistungen-ct',
    id: 'navigation.leistungen.ct',
    description: 'Computertomographie (CT) Link',
    defaultMessage: 'Computertomographie (CT)',
  },

  leistungen_roentgen: {
    to: '/leistungen-roentgen',
    id: 'navigation.leistungen.roentgen',
    description: 'Volldigitales Röntgen Link',
    defaultMessage: 'Volldigitales Röntgen',
  },

  leistungen_prt: {
    to: '/leistungen-prt',
    id: 'navigation.leistungen.prt',
    description: 'CT-gesteuerte Schmerztherapie (PRT) Link',
    defaultMessage: 'CT-gesteuerte Schmerztherapie (PRT)',
  },

  service: {
    to: '/service',
    id: 'navigation.service',
    description: 'Patientenservice Link',
    defaultMessage: 'Unsere Leistungen',
  },

  jobs: {
    to: '/karriere',
    id: 'navigation.jobs',
    description: 'Karriere Link',
    defaultMessage: 'Karriere',
  },

  gallery: {
    to: '/galerie',
    id: 'navigation.gallery',
    description: 'Galerie Link',
    defaultMessage: 'Galerie',
  },

  kontakt: {
    to: '/kontakt',
    id: 'navigation.kontakt',
    description: 'Kontakt',
    defaultMessage: 'Kontakt',
  },

  anfahrt: {
    to: '/anfahrt',
    id: 'navigation.anfahrt',
    description: 'Anfahrt',
    defaultMessage: 'Anfahrt',
  },

  policies: {
    to: '/impressum',
    id: 'navigation.impressum',
    description: 'Impressum',
    defaultMessage: 'Impressum',
  },

  terms: {
    to: '/terms',
    id: 'navigation.terms',
    description: 'Terms & Privacy',
    defaultMessage: 'Terms & Privacy',
  },

  radiologie_contact: {
    id: 'navigation.info',
    description: 'Info',
    defaultMessage: '<span>Telefon:</span><h1>0211 / 959 83 40</h1><br /><span>Öffnungszeiten:</span><br /><h1>Mo — Fr: 08.30 — 16.00 Uhr</h1><p>und nach Vereinbarung</p>',
  },

  help: {
    to: '/help',
    id: 'navigation.help',
    description: 'Help',
    defaultMessage: 'Help',
  },

  spectrum_herz: {
    to: '/spectrum/herz-mrt',
    id: 'navigation.spectrum.herz',
    description: 'Herz MRT Link',
    defaultMessage: 'Herz MRT',
  },

  spectrum_angiographie: {
    to: '/spectrum/angiographie',
    id: 'navigation.spectrum.angiographie',
    description: 'Angiographie Link',
    defaultMessage: 'Angiographie',
  },

  spectrum_herz_ct: {
    to: '/spectrum/herz-ct',
    id: 'navigation.spectrum.herz_ct',
    description: 'Herz CT Link',
    defaultMessage: 'Herz CT',
  },

  spectrum_kardio: {
    to: '/spectrum/kardio-diagnostik',
    id: 'navigation.spectrum.kardio_diagnostik',
    description: 'Kardiologische Diagnostik Link',
    defaultMessage: 'Kardiologische Diagnostik',
  },

  spectrum_ultraschall: {
    to: '/spectrum/ultraschall',
    id: 'navigation.spectrum.ultraschall',
    description: 'Ultraschall (Sonographie) Link',
    defaultMessage: 'Ultraschall (Sonographie)',
  },

  spectrum_mammographie: {
    to: '/spectrum/mammographie',
    id: 'navigation.spectrum.mammographie',
    description: 'Digitale Mammographie Link',
    defaultMessage: 'Digitale Mammographie',
  },

  spectrum_nuklearmedizin: {
    to: '/spectrum/nuklearmedizin',
    id: 'navigation.spectrum.nuklearmedizin',
    description: 'Nuklearmedizin Link',
    defaultMessage: 'Nuklearmedizin',
  },

  logIn: {
    id: 'navigation.logIn',
    description: 'Log in',
    defaultMessage: 'Log in',
  },

  logOut: {
    id: 'navigation.logOut',
    description: 'Log out',
    defaultMessage: 'Log out',
  },

  downloads: {
    to: '/downloads',
    id: 'navigationdownloads',
    description: 'Downloads',
    defaultMessage: 'Downloads',
  },

};
