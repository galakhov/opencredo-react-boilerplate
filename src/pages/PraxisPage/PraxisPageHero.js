import React, { PropTypes } from 'react';
import config from 'app-config';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './PraxisPage.scss';

const PraxisPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-left">
              <h1 className={styles['hero-title']}>
                {config.name}<br />
              </h1>

              <p className={styles['hero-description']}>{config.description1}</p>

              <p className={styles['hero-description']}>{config.description2}</p>

            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

PraxisPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default PraxisPageHero;
