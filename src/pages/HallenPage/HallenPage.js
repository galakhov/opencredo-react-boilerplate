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
            <Col className="main_content_top" sm={9} md={6} xs={9}>
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

                <br />
                <div className="text-right">
                  <p className="img_content"><a href="/images/content/hallen/CIMG1671.jpg" target="_blank" title="Halle (Nahansicht)"><img alt="Halle (Nahansicht)" src="/images/content/hallen/CIMG1671.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/CIMG1672.jpg" target="_blank" title="Halle (Frontalansicht)"><img alt="Halle (Frontalansicht)" src="/images/content/hallen/CIMG1672.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/CIMG1727.jpg" target="_blank" title="Maschine in einer Halle"><img alt="Maschine in einer Halle" src="/images/content/hallen/CIMG1727.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/Hallenentwurf_aussen.jpg" target="_blank" title="Hallenentwurf (außen)"><img alt="Hallenentwurf (außen)" src="/images/content/hallen/Hallenentwurf_aussen.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/Hallenentwurf_innen.jpg" target="_blank" title="Hallenentwurf (innen)"><img alt="Hallenentwurf (innen)" src="/images/content/hallen/Hallenentwurf_innen.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/Hallenfront.jpg" target="_blank" title="Hallenfront"><img alt="Hallenfront" src="/images/content/hallen/Hallenfront.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/P7020018.jpg" target="_blank" title="Eine größere Halle"><img alt="Eine größere Halle" src="/images/content/hallen/P7020018.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/PIC00004.jpg" target="_blank" title="Halle von außen"><img alt="Halle von außen" src="/images/content/hallen/PIC00004.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/CIMG1733.jpg" target="_blank" title="Maschinen in einer Halle"><img alt="Maschinen in einer Halle" src="/images/content/hallen/CIMG1733.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/CIMG1738.jpg" target="_blank" title="Maschinen in einer Halle"><img alt="Maschinen in einer Halle" src="/images/content/hallen/CIMG1738.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/hallen/Halle_von_oben.jpg" target="_blank" title="Halle von oben"><img alt="Halle von oben" src="/images/content/hallen/Halle_von_oben.jpg" /></a></p>
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

export default connect(mapStateToProps)(HallenPage);
