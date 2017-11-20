/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'; // FormattedMessage,
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero } from 'components/Hero'; // , HeroContent
// import config from './AnfahrtPage.i18n';
import { messages } from './AnfahrtPage.i18n';
// import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
// import styles from './AnfahrtPage.scss';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes`${fadeInUp}`;

const fadingContainer = ({ className, children }) => (
	<Grid className={className}>
		{children}
	</Grid>
);

fadingContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

const Fcontainer = styled(fadingContainer)`
  animation: 3s ${fadeAnimation};
  position: absolute;
  left: 2%;
  font-family: EurostileLTW01-BoldEx2;
  font-weight: bold;
  overflow-y: scroll;
  padding-right: 0;
  margin-right: 20px;
  overflow-x: hidden;
`;

/* eslint camelcase: 0 */
const styles_custom = {
  container: {
    width: '100%',
    paddingLeft: 0,
  },
  /* team_container: {
    position: 'absolute',
    left: '2%',
    fontFamily: 'EurostileLTW01-BoldEx2',
    fontWeight: 'bold',
    overflowY: 'scroll',
    paddingRight: 0,
    marginRight: '20px',
    overflowX: 'hidden',
  }, */
  team_container_span: {
    fontFamily: 'EurostileLTW01-Ex2',
    fontWeight: 'normal',
    fontSize: '1.0em',
    width: '90%',
  },
  team_container_caption: {
    borderLeft: 'solid #b3d3b3 4px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '1px',
    paddingBottom: '7px',
    backgroundColor: '#fff',
  },
  iframe_container: {
    border: 0,
    paddingBottom: '15px',
  },
  span_color: {
    color: '#68a868',
  },
};

// <Fcontainer style={styles_custom.team_container}> = <Grid style={styles_custom.team_container}>
const AnfahrtPageHero = (props) =>
(
  <div id="anfahrt-page">
    <Hero displayUnderNavbar>
        <HeroBackground image={props.backgroundImage} />
    </Hero>

    <Fcontainer>
      <Row>
        <Col xs={12} className="text-left">
        <div className="text-team" style={styles_custom.team_container_caption}>
          <h1>
            <FormattedMessage {...messages.title_html} />
          </h1>
          <p style={styles_custom.team_container_span}>
            <span style={styles_custom.span_color}><FormattedHTMLMessage {...messages.overview0} /></span><br />
            <FormattedHTMLMessage {...messages.overview1} />
            <FormattedHTMLMessage {...messages.overview01} /><br /><br />
            <span style={styles_custom.span_color}><FormattedHTMLMessage {...messages.overview02} /></span><br />
            <FormattedHTMLMessage {...messages.overview2} /><br />
            <br /><FormattedHTMLMessage {...messages.overview3} />
            <br /><FormattedHTMLMessage {...messages.overview4} /><br />
          </p>
          <div><iframe style={styles_custom.iframe_container} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.2163094664184!2d6.772505916220039!3d51.215090779588245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca3ffcc9a4f5%3A0x652296cf7b91278f!2sReichsstra%C3%9Fe+59%2C+40217+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1502718417883" width="98%" height="400" allowFullScreen></iframe></div>
        </div>
        </Col>
      </Row>
    </Fcontainer>
  </div>
);

AnfahrtPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class AnfahrtPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  render() {
    return (
      <section id="radiologie-anfahrt-page">
        <AnfahrtPageHero backgroundImage="/images/galerie/aussen_1.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(AnfahrtPage);

/*
  <HeroContent>
  <VAContainer horizontal vertical>
    <VAMiddle>


      <div className="text-left">
        <h1 className={styles['hero-title']}>{config.name}</h1>

        <Grid style={styles_custom.container}>
          <Row>
            <Col xs={12} className="text-left">
              <p><FormattedHTMLMessage {...messages.overview0} /></p>
              <p><FormattedHTMLMessage {...messages.overview1} /></p>
              <p><FormattedHTMLMessage {...messages.overview2} /></p>
            </Col>
          </Row>
        </Grid>

    </div>

  </VAMiddle>
</VAContainer>
</HeroContent>
*/
