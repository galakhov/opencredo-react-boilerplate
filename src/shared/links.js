import config from 'app-config';

export const links = {
  home: {
    to: '/',
    id: 'navigation.home',
    description: 'Go to Home / Landing Page',
    defaultMessage: config.name,
  },

  unternehmen: {
    to: '/unternehmen',
    id: 'navigation.Unternehmen',
    description: 'Unternehmen link',
    defaultMessage: 'Unternehmen',
  },

  service: {
    to: '/service',
    id: 'navigation.service',
    description: 'Service',
    defaultMessage: 'Service',
  },

  autos: {
    to: '/autos',
    id: 'navigation.autos',
    description: 'Autos',
    defaultMessage: 'Autos',
  },

  maschienen: {
    to: '/maschienen',
    id: 'navigation.maschienen',
    description: 'Maschienen',
    defaultMessage: 'Maschienen',
  },

  hallen: {
    to: '/hallen',
    id: 'navigation.hallen',
    description: 'Hallen',
    defaultMessage: 'Hallen',
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

  contact: {
    to: '/contact',
    id: 'navigation.contact',
    description: 'Kontakt',
    defaultMessage: 'Kontakt',
  },

  policies: {
    to: '/impressum',
    id: 'navigation.impressum',
    description: 'Impressum',
    defaultMessage: 'Impressum',
  },

  terms: {
    to: '/agbs',
    id: 'navigation.agbs',
    description: 'agbs',
    defaultMessage: 'AGB‘S',
  },

  help: {
    to: '/help',
    id: 'navigation.help',
    description: 'Help',
    defaultMessage: 'Help',
  },

};
