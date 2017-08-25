import React from 'react';
import PropTypes from 'prop-types';
import config from './AboutPage.i18n';
import { FormattedMessage } from 'react-intl'; // FormattedHTMLMessage
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './AboutPage.scss';
import { messages } from './AboutPage.i18n';
// import HeaderLineTop from '../../static/images/header_line_top.svg';
// <HeaderLineTop />
// import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
// import { HashRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';
// import { Hero } from 'components/Hero'; // HeroBackground
// import { messages } from './PatientenPage.i18n';
// import StyleSheet from 'react-style-prototype';

// https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributeshero

// TODO: Links to doctors' pages

// <AboutPageHero backgroundImage="/images/bg00.jpg" />

/* eslint camelcase: 0 */
const styles_custom = {
  container: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
  team_container: {
    position: 'absolute',
    left: '26%',
    top: '630px',
    fontFamily: 'EurostileLTW01-BoldEx2',
    fontWeight: 'bold',
  },
  team_container_caption: {
    borderLeft: 'solid #b3d3b3 4px',
    paddingLeft: '20px',
    paddingTop: '1px',
    paddingBottom: '7px',
  },
};


// , match
const AboutPageHeroTeam = (props) =>
  (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroBackground image={"../images/header_line_top.png"} />
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
                  { /* TODO: See ./AboutPageHero.js for the second menu */ }
                    <MenuItem href={messages.doctors.content.doc0.route} eventKey={2.1}><FormattedMessage {...messages.doctors.content.doc0} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc1.route} eventKey={2.2}><FormattedMessage {...messages.doctors.content.doc1} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc2.route} eventKey={2.3}><FormattedMessage {...messages.doctors.content.doc2} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc3.route} eventKey={2.4}><FormattedMessage {...messages.doctors.content.doc3} /></MenuItem>
                    <MenuItem href={messages.doctors.content.doc4.route} eventKey={2.5}><FormattedMessage {...messages.doctors.content.doc4} /></MenuItem>
                  </ul>
                  </Col>
                </Row>
              </Grid>
            </div>
            {
              /* TODO: NESTED ROUTES: https://reacttraining.com/react-router/web/example/basic

              <li><Link to={messages.doctors.content.doc0.route}><FormattedMessage {...messages.doctors.content.doc0} /></Link></li>
              <li><Link to={messages.doctors.content.doc1.route}><FormattedMessage {...messages.doctors.content.doc1} /></Link></li>
              <li><Link to={messages.doctors.content.doc2.route}><FormattedMessage {...messages.doctors.content.doc2} /></Link></li>
              <li><Link to={messages.doctors.content.doc3.route}><FormattedMessage {...messages.doctors.content.doc3} /></Link></li>
              <li><Link to={messages.doctors.content.doc4.route}><FormattedMessage {...messages.doctors.content.doc4} /></Link></li>

              <Route path="/team/dabir" component={AboutPage_01} />
              <Route path="/team/hirning" component={AboutPage_02} />
              <Route path="/team/poll" component={AboutPage_03} />
              <Route path="/team/dabir-scherfeld" component={AboutPage_04} />
              <Route path="/team/meyer" component={AboutPage_05} />

            <Route path={`${match.url}/:docId`} component={AboutPageDoc_Dynamic}/>
              <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
              )}/>
              */
            }

          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );

AboutPageHeroTeam.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default AboutPageHeroTeam;
