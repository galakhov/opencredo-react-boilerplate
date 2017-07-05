import React, { PropTypes } from 'react';
// import config from 'app-config';
import { Hero, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
// import styles from './LandingPage.scss';

/* eslint camelcase: 0 */
const styles_custom = {
  content_img: {
    position: 'absolute',
    top: '27%',
    left: '11%',
  },
  content_container: {
    position: 'absolute',
    left: '13%',
    top: '38%',
  },
  content_landingpage: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'relative',
    width: '45%',
    maxHeight: '80%',
  },
  site_container: {
    width: '100%',
    // minWidth: '1920px',
    height: '800px',
    position: 'relative',
  },
};

// <HeroBackground image={"./images/header_bg.png"} />
/*
  <div style={styles_custom.site_container}>
    <VAContainer horizontal vertical>
      <VAMiddle>
*/
// <div style={styles_custom.content_container}> </div>

const LandingPageHero = (props) =>
  (
    <Hero displayUnderNavbar style={styles_custom.site_container}>
      <HeroBackground image={props.backgroundImage} />
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-left">
                <img src="/images/welcome.png" width="800" style={styles_custom.content_img} />
            </div>
          </VAMiddle>
        </VAContainer>
      {
        /* <HeroContent style={styles_custom.container}>

          <VAContainer horizontal vertical>
            <VAMiddle>
              <div className="text-left">
                <h1 className={styles['hero-title']}>
                  {config.news}
                </h1>

                <p className={styles['hero-description']}><b>{config.news_entry0_date}</b>
                <h5>{config.news_entry0_title}</h5></p>
                <p className={styles['hero-description']}>
                  {config.news_entry0_text}
                </p>

                <br />
                <p className={styles['hero-description']}><b>{config.news_entry1_date}</b> <h5>{config.news_entry1_title}</h5></p>
                <p className={styles['hero-description']}>
                  {config.news_entry1_text}
                </p>

                <br />
                <h1 className={styles['hero-title']}>
                  {config.landingPage}<br />
                </h1>

                <p className={styles['hero-description']}>
                  <br />{config.landingPage_p0}
                </p>

                <p className={styles['hero-description']}>
                  {config.landingPage_p1}
                </p>

                <p className={styles['hero-description']}>
                  {config.landingPage_p2}
                </p>

                <p className={styles['hero-description']}>
                  {config.landingPage_p3}
                </p>
              </div>
            </VAMiddle>
          </VAContainer>
      </HeroContent> */ }
    </Hero>
  );

LandingPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default LandingPageHero;
