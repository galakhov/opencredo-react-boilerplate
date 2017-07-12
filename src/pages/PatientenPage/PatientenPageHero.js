import React, { PropTypes } from 'react';
import config from './PatientenPage.i18n';
import { messages } from './PatientenPage.i18n';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
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
  custom_container_position: {
    left: '13%',
  },
};

// https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributeshero
const PatientenPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent style={styles_patients.custom_container_position}> { /* styles={props.styles} */ }
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-left">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>{config.description1}</p>
              <p className={styles['hero-description']}>{config.description2}</p>
              <p className={styles['hero-description']}><b>{config.description3}</b></p>

              <h1 className={styles['hero-title']}><FormattedHTMLMessage {...messages.description01_title} /></h1>
              <p className={styles['hero-description']}>
                <ul>
                  <li><Link to={messages.description01_1.route}><FormattedHTMLMessage {...messages.description01_1} /></Link></li>
                  <li><Link to={messages.description01_2.route}><FormattedHTMLMessage {...messages.description01_2} /></Link></li>
                  <li><Link to={messages.description01_3.route}><FormattedHTMLMessage {...messages.description01_3} /></Link></li>
                  <li><Link to={messages.description01_4.route}><FormattedHTMLMessage {...messages.description01_4} /></Link></li>
                </ul>
              </p>

              <h1 className={styles['hero-title']}><FormattedHTMLMessage {...messages.description02_title} /></h1>
              <p className={styles['hero-description']}><FormattedHTMLMessage {...messages.description02} /></p>

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
  styles: PropTypes.string.isRequired,
};

export default PatientenPageHero;
