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
    to: '/about-us',
    id: 'navigation.aboutUs',
    description: 'Team',
    defaultMessage: 'Team',
  },

  spectrum: {
    to: '/spectrum',
    id: 'navigation.spectrum',
    description: 'Übersicht Link',
    defaultMessage: 'Übersicht',
  },

  spectrum_radiologie: {
    to: '/spectrum/radiologie',
    id: 'navigation.spectrum.radiologie',
    description: 'Radiologie Link',
    defaultMessage: 'Radiologie',
  },

  spectrum_mrt: {
    to: '/spectrum/mrt',
    id: 'navigation.spectrum.mrt',
    description: 'MRT Untersuchung in Düsseldorf Link',
    defaultMessage: 'MRT Untersuchung in Düsseldorf',
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

  spectrum_ct: {
    to: '/spectrum/ct',
    id: 'navigation.spectrum.ct',
    description: 'CT-Untersuchungen Link',
    defaultMessage: 'CT-Untersuchungen',
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

  spectrum_roentgen: {
    to: '/spectrum/roentgen',
    id: 'navigation.spectrum.roentgen',
    description: 'Digitales strahlungsarmes Röntgen Link',
    defaultMessage: 'Digitales strahlungsarmes Röntgen',
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

  spectrum_schmerztherapie: {
    to: '/spectrum/schmerztherapie',
    id: 'navigation.spectrum.schmerztherapie',
    description: 'Schmerztherapie Link',
    defaultMessage: 'Schmerztherapie',
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
    to: '/impressum',
    id: 'navigation.kontakt',
    description: 'Kontakt',
    defaultMessage: 'Kontakt',
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

  help: {
    to: '/help',
    id: 'navigation.help',
    description: 'Help',
    defaultMessage: 'Help',
  },

  radiologie_contact: {
    id: 'navigation.info',
    description: 'Info',
    defaultMessage: '<span>Telefon:</span><br /><h1>0211 / 959 83 40</h1><span>Öffnungszeiten:</span><br /><h1>Mo • Di • Do:</h1><p>von 7:30 bis 17:30 Uhr</p><h1>Mi • Fr:</h1><p>von 7:30 bis 15:30 Uhr</p>',
  },

};
