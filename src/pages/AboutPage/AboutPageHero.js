import React, { PropTypes } from 'react';
import config from './AboutPage.i18n';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './AboutPage.scss';

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
  bg: {
    width: '1920px',
    height: '325px',
    backgroundSize: 'contain',
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

            <div className="text-center">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>
                {config.description0}
              </p>

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-center">
                    <h1>123</h1>
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
