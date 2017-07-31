import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './HallenPage.scss';
import { Grid, Row, Col } from 'react-bootstrap'; // , Button
import debug from 'debug';
import { autobind } from 'core-decorators';
import { messages } from './HallenPage.i18n';
import HallenPageHero from './HallenPageHero';
import Sidebar from '../../containers/Sidebar/Sidebar';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('hallen-page:*');
}

const log = debug('hallen-page:info');

export class HallenPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title_hallen));
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
      <div id="hallen-page">
        <HallenPageHero backgroundImage="/images/hallen_gura.jpg" />
        <Grid>
          <Row>
            <Col className="sidebar" sm={3} md={3} xs={3}>
              <div>&nbsp;</div>
            </Col>
            <Col className="main_content_top" sm={6} md={6} xs={7}>
              <article className="gura_verwaltungs_gmbh_homepage">
                &nbsp;
              </article>
            </Col>
            <Col className="main_content" sm={6} md={6} xs={7}>
              <article>
                <h1 className={styles.title}>
                  <FormattedMessage {...messages.title_hallen} />
                </h1>
                <FormattedHTMLMessage {...messages.hallenText} />
              </article>
            </Col>
            <Col className="aside_content" sm={3} md={3} xs={2}>
              <Sidebar />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  ({ isAuthenticated: state.isAuthenticated });

export default connect(mapStateToProps)(HallenPage);
