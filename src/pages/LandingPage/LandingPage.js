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

  render() {
    return (
      <div id="landing-page" style={styles_custom.container}>
        <LandingPageHero backgroundImage="images/bg_radiologie_welcome_burned.jpg" />
        <Grid>
          <Row>
            <Col xs={12} id={`${styles.content_container}`}>
              <h1>
                <figure style={styles_custom.title_bg}><FormattedMessage {...messages.landingText0} /><small> </small><FormattedMessage {...messages.landingText1} /></figure><br /><figure style={styles_custom.title_caption} id={`${styles.figure_caption}`}><FormattedMessage {...messages.landingText2} /><small> </small><FormattedMessage {...messages.landingText2_0} /><small> </small><FormattedMessage {...messages.landingText3} /></figure>
              </h1>
              <h2><FormattedHTMLMessage {...messages.landingText4} /></h2>
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
