import React, { PropTypes } from 'react';
import config from './AboutPage.i18n';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'; // FormattedHTMLMessage
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './AboutPage.scss';
import { messages } from './AboutPage.i18n';

// import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
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

// https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributeshero

const AboutPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroBackground image={"./images/header_bg.png"} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>

            <div className="text-left">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>
                {config.description0}
              </p>

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-left">
                    <h1><FormattedMessage {...messages.doctors} /></h1>
                    <p><b><FormattedMessage {...messages.doctors.content.title0} /></b></p>
                    <ul className="team-list">
                      <li><FormattedMessage {...messages.doctors.content.doc0} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc1} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc2} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc3} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc4} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc7} /></li>
                      <li><FormattedMessage{...messages.doctors.content.doc9} /></li>
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
                    <FormattedHTMLMessage{...messages.photos.doc1} /> <FormattedHTMLMessage{...messages.photos.doc2} /> <FormattedHTMLMessage{...messages.photos.doc3} />
                    <FormattedHTMLMessage{...messages.photos.doc4} />
                    <FormattedHTMLMessage{...messages.photos.doc5} />
                    <FormattedHTMLMessage{...messages.photos.doc6} />
                    </Row>
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
