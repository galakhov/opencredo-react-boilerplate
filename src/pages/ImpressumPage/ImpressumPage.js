import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './ImpressumPage.scss';
import { Grid, Row, Col } from 'react-bootstrap'; // , Button
import { autobind } from 'core-decorators';
import { messages } from './ImpressumPage.i18n';
import ImpressumPageHero from './ImpressumPageHero';
import Sidebar from '../../containers/Sidebar/Sidebar';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

/* eslint camelcase: 0 */
const custom_styles = {
  row: {
    width: '100%',
    overflow: 'hidden',
  },
  article: {
    width: '90%',
    maxWidth: '800px',
    marginTop: '45px',
  },
};

export class ImpressumPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.impressum_title));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  @autobind
  handleButtonClick() {
    // log('button click handler context:', this);
  }

  render() {
    return (
      <div id="impressum-page">
        <ImpressumPageHero backgroundImage="/images/service_gura.jpg" />
        <Grid>
          <Row style={custom_styles.row}>
            <Col className="sidebar" sm={3} md={3} xs={3}>
              <div>&nbsp;</div>
            </Col>
            <Col className="main_content_top" sm={9} md={6} xs={9}>
              <article className="gura_verwaltungs_gmbh_homepage">
                &nbsp;
              </article>
            </Col>
            <Col className="main_content" sm={6} md={6} xs={7}>
              <article style={custom_styles.article}>
                <br /><h1 className={styles.title}>
                  <FormattedMessage {...messages.impressum_title} />
                </h1>
                <FormattedHTMLMessage {...messages.impressumText} />
                <br />
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

export default connect(mapStateToProps)(ImpressumPage);
