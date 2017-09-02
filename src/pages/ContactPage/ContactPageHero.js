import React, { PropTypes } from 'react';
// import config from 'app-config';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './ContactPage.scss';

const ContactPageHero = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-center">
              <h1 className={styles['hero-title']}>
                <img src="./images/service_gura.png" />
              </h1>
            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

ContactPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default ContactPageHero;
