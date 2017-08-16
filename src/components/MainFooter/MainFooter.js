import React from 'react';
import styles from './MainFooter.scss';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { links } from 'shared/links';

const footerLinks = [
  // links.aboutUs,
  // links.terms,
  links.contact,
  links.policies,

  // links.help,
];
export default class MainFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <footer className={`footer footer-main ${styles.footer}`}>
        <div className={`footer_contact ${styles.footer_contact}`}>
          <p><span><strong>GURA</strong></span> <span className={`footer_contact_span ${styles.footer_contact_span}`}>Verwaltungs GmbH & Co KG</span><br />
An der Gasse 29 - 33<br />
D-51789 Lindlar<br />
Tel: +49 (0) 2266 4 77 87 - 0<br />
Fax: +49 (0) 2266 4 77 87 - 10<br />
E-Mail: info@gura-verwaltung.de<br />
Internet: www.gura-verwaltung.de</p>
        </div>
        <nav>
          <ul className="inline-list">
            {footerLinks.map((link) =>
              <li key={link.id} className={`footer-item ${styles.item}`}>
                <Link to={link.to}>
                  <FormattedMessage {...link} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </footer>
    );
  }
}
