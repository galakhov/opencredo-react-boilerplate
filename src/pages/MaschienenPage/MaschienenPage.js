import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './MaschienenPage.scss';
import { Grid, Row, Col } from 'react-bootstrap'; // , Button
import debug from 'debug';
import { autobind } from 'core-decorators';
import { messages } from './MaschienenPage.i18n';
import MaschienenPageHero from './MaschienenPageHero';
import Sidebar from '../../containers/Sidebar/Sidebar';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('maschienen-page:*');
}

const log = debug('maschienen-page:info');

export class MaschienenPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title_maschienen));
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
      <div id="maschienen-page">
        <MaschienenPageHero backgroundImage="/images/maschienen_gura.jpg" />
        <Grid>
          <Row>
            <Col className="sidebar" sm={3} md={3} xs={3}>
              <div>&nbsp;</div>
            </Col>
            <Col className="main_content_top" sm={9} md={6} xs={9}>
              <article className="gura_verwaltungs_gmbh_homepage">
                &nbsp;
              </article>
            </Col>
            <Col className="main_content" sm={6} md={6} xs={7}>
              <article>
                <h1 className={styles.title}>
                  <FormattedMessage {...messages.title_maschienen} />
                </h1>
                <FormattedHTMLMessage {...messages.maschienenText} />
                <br />
                <div className="text-right">
                {
                  /*
                  Boschert Powerline
                  EHT Multibend
                  HAAS VF 2 SS
                  HAAS VF 1
                  Konventionelle Drehm.
                  Konventionelle Fräsm.
                  Exzenterpressen
                  Punktschweißmaschine
                  Schweißgeräte
                  */
                }
                  <p className="img_content"><a href="/images/content/Boschert_Multipunch.jpg" target="_blank"><img alt="Boschert Multipunch" src="/images/content/Boschert_Multipunch.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/Boschert_ErgoCut.jpg" target="_blank"><img alt="Boschert ErgoCut" src="/images/content/Boschert_ErgoCut.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/Haas_ST10.jpg" target="_blank"><img alt="Haas ST10" src="/images/content/Haas_ST10.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/HaasST35.jpg" target="_blank"><img alt="Haas ST35" src="/images/content/HaasST35.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/Haas_ST35.jpg" target="_blank"><img alt="Haas ST35 Big Bore" src="/images/content/Haas_ST35.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/schroeder.jpg" target="_blank"><img alt="Schröder Professional" src="/images/content/schroeder.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/KAMI_DKM_500-2CS.jpg" target="_blank"><img alt="KAMI DKM 500 2CS Konventionelle Drehmaschine" src="/images/content/KAMI_DKM_500-2CS.jpg" /></a></p>
                </div>
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

export default connect(mapStateToProps)(MaschienenPage);
