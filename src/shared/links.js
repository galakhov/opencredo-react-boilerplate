import config from 'app-config';

export const links = {
  home: {
    to: '/',
    id: 'navigation.home',
    description: 'Go to Home / Landing Page',
    defaultMessage: config.name,
  },

  aboutUs: {
    to: '/about-us',
    id: 'navigation.aboutUs',
    description: 'About Us page link',
    defaultMessage: 'About Us',
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
    defaultMessage: 'Patientenservice',
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

  faq: {
    to: '/faq',
    id: 'navigation.faq',
    description: 'FAQ',
    defaultMessage: 'FAQ',
  },

  policies: {
    to: '/policies',
    id: 'navigation.policies',
    description: 'Policies',
    defaultMessage: 'Policies',
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

};
