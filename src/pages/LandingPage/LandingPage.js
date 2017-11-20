import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './LandingPage.scss';
// import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import debug from 'debug';
import { autobind } from 'core-decorators';
import { messages } from './LandingPage.i18n';
import LandingPageHero from './LandingPageHero';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';
import BGTimedSwapper from '../BackgroundImagesSwapper';

// https://github.com/styled-components/styled-components
import styled, { keyframes } from 'styled-components';
// http://react-animations.herokuapp.com // https://github.com/FormidableLabs/react-animations
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes`${fadeInUp}`;

const fadingContainer = ({ className, children }) => (
	<div className={className}>
		{children}
	</div>
);

fadingContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

const Fcontainer = styled(fadingContainer)`
  animation: 3s ${fadeAnimation};
`;

if (__DEBUG__) {
  debug.enable('landing-page:*');
}

const log = debug('landing-page:info');

/* eslint camelcase: 0 */
const styles_custom = {
  container: {
    // width: 'auto',
  },
  content_img: {
    position: 'relative',
  },
  title_bg: {
    whiteSpace: 'pre-wrap',
    float: 'left',
    marginBottom: '5px',
  },
  title_caption: {
    whiteSpace: 'pre-wrap',
    clear: 'left',
  },
  backroundImages: {
    backroundImage: 'url()',
  },
};

export class LandingPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
  }

  componentWillUnmount() {
    log('remove custom document title');
    this.props.dispatch(resetDocumentTitle());
  }

  @autobind
  handleButtonClick() {
    log('button click handler context:', this);
  }

/*
  <p>
    <FormattedHTMLMessage {...messages.para.autoUpdate} />
  </p>
  <p>
    <FormattedHTMLMessage {...messages.para.es7Decorator} />
  </p>
*/

// <LandingPageHero style={styels_custom.backroundImages} />
// <LandingPageHero backgroundImage="images/bg_radiologie_welcome_burned.jpg" />
// `url(images/bg_radiologie_patients.jpg), url(images/bg_radiologie_welcome_burned.jpg)`
// <LandingPageHero style={ { backgroundImage: bg1 } } />
  render() {
    // const bgImageArray = ["images/bg_radiologie_patients.jpg","images/bg_radiologie_welcome_burned.jpg"];
    // const secs = 3;

    /* bgImageArray.forEach(function(img){
        new Image().src = img;
        // caches images, avoiding white flash between background replacements
    });

    function backgroundSequence() {
    	window.clearTimeout();
    	var k = 0;
    	for (i = 0; i < bgImageArray.length; i++) {
    		setTimeout(function(){
    			document.documentElement.style.backgroundImage = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
    			document.documentElement.style.backgroundSize ="cover";
    		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
    		}, (secs * 1000) * i)
    	}
    } */

    const bg1 = 'images/bg_radiologie_patients.jpg';
    const bg2 = 'images/bg_radiologie_welcome_burned.jpg';
    const bg3 = 'images/bg_radiologie_waiting_room.jpg';

    /*
      <div className={styles.background_with_animation} style={{ backgroundImage: `url(${bg1})` }}>
      </div>
      <div className={styles.background_with_animation} style={{ backgroundImage: `url(${bg2})` }}>
      </div>
    */

    return (
      <div id="landing-page" style={styles_custom.container}>
      <BGTimedSwapper transitionName="fade-wait-delay" transitionEnterTimeout={5000} transitionLeaveTimeout={1500} overflowHidden={false} height={'100%'}>
        <LandingPageHero backgroundImage={bg1} />
        <LandingPageHero backgroundImage={bg2} />
        <LandingPageHero backgroundImage={bg3} />
      </BGTimedSwapper>
        <Grid>
          <Row>
            <Col xs={12} id={`${styles.content_container}`}>
              <Fcontainer className="f-container-startpage">
                <h1>
                  <figure style={styles_custom.title_bg}><FormattedMessage {...messages.landingText0} /><small> </small><FormattedMessage {...messages.landingText1} /></figure><br /><figure style={styles_custom.title_caption} id={`${styles.figure_caption}`}><FormattedMessage {...messages.landingText2} /><small> </small><FormattedMessage {...messages.landingText2_0} /><small> </small><FormattedMessage {...messages.landingText3} /></figure>
                </h1>
                <h2><FormattedHTMLMessage {...messages.landingText4} /></h2>
              </Fcontainer>
            </Col>
          </Row>
        </Grid>
          {
            /*
            <div className="radiologie_home" style={styles_custom.content_container}>
            </div>

            <Grid>
              <Row>
                <Col xs={12} md={12} style={styles_custom.content_container}>
                  <img src="/images/welcome.png" width="800" style={styles_custom.content_img} />
                </Col>
              </Row>
            </Grid>

        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>
                <FormattedMessage {...messages.title} />
              </h1>
              <article>
                <FormattedHTMLMessage {...messages.landingText} />
              </article>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              <Button bsStyle="primary" onClick={this.handleButtonClick}>
                <FormattedMessage {...messages.button.clickMe} />
              </Button>
            </Col>
          </Row>
        </Grid> */ }
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  ({ isAuthenticated: state.isAuthenticated });

export default connect(mapStateToProps)(LandingPage);
