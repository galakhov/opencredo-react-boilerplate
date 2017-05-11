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
