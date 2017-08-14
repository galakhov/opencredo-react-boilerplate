import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainFooter.scss';
// import { Link } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { links } from 'shared/links';
// import { Image } from 'react-dom';

const footerLinks = [
  // links.aboutUs,
  // links.downloads,
  // links.anfahrt,
  // links.terms,
  // links.help,
  links.policies,
];
// <Image source={require('../../static/images/footer_line_bottom.png')} className={styles['footer-line']} />
export default class MainFooter extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <footer className={`footer footer-main ${styles.footer}`}>
        <div className={styles['footer-line']} />
        <nav>
          <ul className="inline-list">
            {footerLinks.map((link) =>
                <MenuItem key={link.id} href={link.to} className={`footer-item ${styles.item}`}>
                  <FormattedMessage {...link} />
                </MenuItem>
            )}
          </ul>
        </nav>
      </footer>
    );
  }
}
