import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './AutosPage.scss';
import { Grid, Row, Col } from 'react-bootstrap'; // , Button
import debug from 'debug';
import { autobind } from 'core-decorators';
import { messages } from './AutosPage.i18n';
import LandingPageHero from './AutosPageHero';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('autos-page:*');
}

const log = debug('autos-page:info');

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

  render() {
    return (
      <div id="autos-page">
        <LandingPageHero backgroundImage="/images/autos_gura.jpg" />
        <Grid>
          <Row>
            <Col className="sidebar" sm={4} md={3} xs={4}>
              <div>&nbsp;</div>
            </Col>
            <Col className="main_content" sm={8} md={9} xs={8}>
              <article>
                <h1 className={styles.title}>
                  <FormattedMessage {...messages.title_autos} />
                </h1>
                <FormattedHTMLMessage {...messages.landingText} />
              </article>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  ({ isAuthenticated: state.isAuthenticated });

export default connect(mapStateToProps)(LandingPage);
