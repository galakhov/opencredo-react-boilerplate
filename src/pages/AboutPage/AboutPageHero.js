import React, { PropTypes } from 'react';
import config from './AboutPage.i18n';
import { FormattedMessage } from 'react-intl'; // FormattedHTMLMessage
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
                    <ul>
                      <li><FormattedMessage {...messages.doctors.content.doc0} /> <b><FormattedMessage{...messages.doctors.content.doc0_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc1} /> <b><FormattedMessage{...messages.doctors.content.doc1_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc2} /> <b><FormattedMessage{...messages.doctors.content.doc2_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc3} /> <b><FormattedMessage{...messages.doctors.content.doc3_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc4} /> <b><FormattedMessage{...messages.doctors.content.doc4_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc5} /> <b><FormattedMessage{...messages.doctors.content.doc5_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc6} /> <b><FormattedMessage{...messages.doctors.content.doc6_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc7} /> <b><FormattedMessage{...messages.doctors.content.doc7_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc8} /> <b><FormattedMessage{...messages.doctors.content.doc8_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc9} /> <b><FormattedMessage{...messages.doctors.content.doc9_title} /></b></li>
                      <li><FormattedMessage{...messages.doctors.content.doc10} /> <b><FormattedMessage{...messages.doctors.content.doc10_title} /></b></li>
                    </ul>
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
