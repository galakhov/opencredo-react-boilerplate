import React, { PropTypes } from 'react';
import config from 'app-config';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './AutosPage.scss';

const LandingPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-center">
              <h1 className={styles['hero-title']}>
                <img src="./images/autos_gura.png" />
              </h1>

              <p className={styles['hero-description']}>
                {config.description1}
              </p>

              <p className={styles['hero-description']}>
                {config.description2}
              </p>

              <p className={styles['hero-description']}>
                {config.description3}
              </p>
            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

LandingPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default LandingPageHero;
