import React, { PropTypes } from 'react';
import config from './PatientenPage.i18n';
import { messages } from './PatientenPage.i18n';
import { FormattedHTMLMessage } from 'react-intl';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './PatientenPage.scss';

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
const styles_patients = {
  container: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
  bg: {
    /* //width: '1920px', */
    height: '325px',
    backgroundSize: 'contain',
  },
};

// https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributeshero

const PatientenPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>

            <div className="text-left">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>
                <FormattedHTMLMessage {...messages.description0} />
              </p>

              <p className={styles['hero-description']}>
                <b>{config.description1}</b>
              </p>

              <p className={styles['hero-description']}>
                <FormattedHTMLMessage {...messages.description01} />
              </p>

              <p className={styles['hero-description']}>
                {config.description2}
              </p>

              <Grid style={styles_patients.container}>
                <Row>
                  <Col xs={12} className="text-left">
                    <h1></h1>
                  </Col>
                </Row>
              </Grid>
            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

PatientenPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default PatientenPageHero;
