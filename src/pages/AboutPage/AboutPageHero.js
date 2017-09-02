import React from 'react';
import PropTypes from 'prop-types';
import config from './AboutPage.i18n';
import { FormattedMessage } from 'react-intl'; // FormattedHTMLMessage
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './AboutPage.scss';
import { messages } from './AboutPage.i18n';
// import { Link } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';
// import HeaderLineTop from '../../static/images/header_line_top.svg';
// <HeaderLineTop />

// import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import LightboxGalleryTeam from '../GalleryPage/GalleryTeam';
// import { Hero } from 'components/Hero'; // HeroBackground
// import { messages } from './PatientenPage.i18n';

// import StyleSheet from 'react-style-prototype';

/* const SomeStyles = StyleSheet.create({
  normal_width: {
    width: '45%',
  },
}); */

/* eslint camelcase: 0 */
const styles_custom = {
  container: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
};

/*
footer_line: {
  height: '25px',
  bottom: '34px',
  position: 'absolute',
}
*/

// https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributeshero

// TODO: Links to doctors' pages
const AboutPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroBackground image={"./images/header_line_top.png"} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>

            <div className="text-left">
              <h1 className={styles['hero-title']}>
                { config.team }
              </h1>

              <p className={styles['hero-description']}><FormattedMessage {...messages.doctors.content} /></p>

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-left">
                  <ul className="team-list">
                    {
                      /*
                      <li><Link to={messages.doctors.content.doc0.route}><FormattedMessage {...messages.doctors.content.doc0} /></Link></li>
                      <li><Link to={messages.doctors.content.doc1.route}><FormattedMessage {...messages.doctors.content.doc1} /></Link></li>
                      <li><Link to={messages.doctors.content.doc2.route}><FormattedMessage {...messages.doctors.content.doc2} /></Link></li>
                      <li><Link to={messages.doctors.content.doc3.route}><FormattedMessage {...messages.doctors.content.doc3} /></Link></li>
                      <li><Link to={messages.doctors.content.doc4.route}><FormattedMessage {...messages.doctors.content.doc4} /></Link></li>
                      */
                    }
                    <MenuItem href={messages.doctors.content.doc0.route} eventKey={2.1}><FormattedMessage {...messages.doctors.content.doc0} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc1.route} eventKey={2.2}><FormattedMessage {...messages.doctors.content.doc1} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc2.route} eventKey={2.3}><FormattedMessage {...messages.doctors.content.doc2} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc3.route} eventKey={2.4}><FormattedMessage {...messages.doctors.content.doc3} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc4.route} eventKey={2.5}><FormattedMessage {...messages.doctors.content.doc4} /></MenuItem>
                  </ul>
                  {
                    /*
                    <h1><FormattedHTMLMessage {...messages.doctors} /></h1>
                    <p><b><FormattedHTMLMessage {...messages.doctors.content.title0} /></b></p>

                        <ul className="team-list">
                          <li><Link to={...messages.doctors.content.doc0.route}><FormattedMessage {...messages.doctors.content.doc0} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc1.route}><FormattedMessage{...messages.doctors.content.doc1.route} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc2.route}><FormattedMessage{...messages.doctors.content.doc2.route} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc3.route}><FormattedMessage{...messages.doctors.content.doc3.route} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc4.route}><FormattedMessage{...messages.doctors.content.doc4.route} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc7.route}><FormattedMessage{...messages.doctors.content.doc7.route} /></Link></li>
                          <li><Link to={...messages.doctors.content.doc9.route}><FormattedMessage{...messages.doctors.content.doc9.route} /></Link></li>
                        </ul>

                        <p><b><FormattedMessage {...messages.doctors.content.title1} /></b></p>
                        <ul className="team-list">
                          <li><FormattedMessage{...messages.doctors.content.doc5} /></li>
                          <li><FormattedMessage{...messages.doctors.content.doc6} /></li>
                        </ul>
                        <p><b><FormattedMessage {...messages.doctors.content.title2} /></b></p>
                        <ul className="team-list">
                          <li><FormattedMessage{...messages.doctors.content.doc8} /></li>
                          <li><FormattedMessage{...messages.doctors.content.doc10} /></li>
                        </ul><br />


                      <Row className="team-photos">
                      <FormattedHTMLMessage{...messages.photos.doc1} />
                      <FormattedHTMLMessage{...messages.photos.doc2} />
                      <FormattedHTMLMessage{...messages.photos.doc3} />
                      <FormattedHTMLMessage{...messages.photos.doc4} />
                      <FormattedHTMLMessage{...messages.photos.doc5} />
                      <FormattedHTMLMessage{...messages.photos.doc6} />
                      <FormattedHTMLMessage{...messages.photos.doc7} />
                      </Row>
                      */
                    }

                  <LightboxGalleryTeam />
                  </Col>
                </Row>
              </Grid>

            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

AboutPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default AboutPageHero;
