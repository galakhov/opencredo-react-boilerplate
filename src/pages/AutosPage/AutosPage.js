import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './AutosPage.scss';
import { Grid, Row, Col } from 'react-bootstrap'; // , Button
import { messages } from './AutosPage.i18n';
import AutosPageHero from './AutosPageHero';
import Sidebar from '../../containers/Sidebar/Sidebar';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

export class AutosPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title_autos));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  render() {
    return (
      <div id="autos-page">
        <AutosPageHero backgroundImage="/images/autos_gura.jpg" />
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
                  <FormattedMessage {...messages.title_autos} />
                </h1>
                <FormattedHTMLMessage {...messages.landingText} />
                <br />
                <div className="text-right">
                {
                  /*
                  es fehlen noch:
                  1 x VW T6?
                  3 x Scherenhubwagen
                  4 x Säulenschwenkkran
                  */
                }
                  <p className="img_content"><a href="/images/content/fahrzeuge/sprinter1.jpg" target="_blank"><img alt="Gura Sprinter" src="/images/content/fahrzeuge/sprinter1.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/lkw.jpg" target="_blank"><img alt="Gura LKW" src="/images/content/fahrzeuge/lkw.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/sprinter2.jpg" target="_blank"><img alt="Gura Sprinter" src="/images/content/fahrzeuge/sprinter2.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/spier_einachsanhaenger.jpg" target="_blank"><img alt="Spier Einachsanhänger" src="/images/content/fahrzeuge/spier_einachsanhaenger.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/GM_NH_27.jpg" target="_blank"><img alt="GM NH 27" src="/images/content/fahrzeuge/GM_NH_27.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gura_autos_ueberblick.jpg" target="_blank" title="MB C180 Überblick"><img alt="MB C180 Überblick" src="/images/content/fahrzeuge/gura_autos_ueberblick.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/GM_NH_27_Detail.jpg" target="_blank"><img alt="Autos" src="/images/content/fahrzeuge/GM_NH_27_Detail.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/autos_ueberblick.jpg" target="_blank"><img alt="Autos Überblick" src="/images/content/fahrzeuge/autos_ueberblick.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gura_autos.jpg" target="_blank"><img alt="Gura Autos" src="/images/content/fahrzeuge/gura_autos.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gura_autos_detail.jpg" target="_blank"><img alt="Gura Autos" src="/images/content/fahrzeuge/gura_autos_detail.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/humbauer.jpg" target="_blank"><img alt="Humbauer" src="/images/content/fahrzeuge/humbauer.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/ford_transit_pritsche.jpg" target="_blank" title="Ford Transit Pritsche"><img alt="Ford Transit Pritsche" src="/images/content/fahrzeuge/ford_transit_pritsche.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gabelstapler_2.jpg" target="_blank" title="Gabelstapler"><img alt="Gabelstapler" src="/images/content/fahrzeuge/gabelstapler_2.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/elektrohubwagen_2.jpg" target="_blank" title="Elektrohubwagen"><img alt="Elektrohubwagen" src="/images/content/fahrzeuge/elektrohubwagen_2.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/elektrohubwagen_3.jpg" target="_blank" title="Elektrohubwagen"><img alt="Elektrohubwagen" src="/images/content/fahrzeuge/elektrohubwagen_3.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gabelstapler_1.jpg" target="_blank" title="Gabelstapler"><img alt="Gabelstapler" src="/images/content/fahrzeuge/gabelstapler_1.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/elektrohubwagen_1.jpg" target="_blank" title="Elektrohubwagen"><img alt="Elektrohubwagen" src="/images/content/fahrzeuge/elektrohubwagen_1.jpg" /></a></p>
                  <p className="img_content"><a href="/images/content/fahrzeuge/gabelstapler_3.jpg" target="_blank" title="Gabelstapler"><img alt="Gabelstapler" src="/images/content/fahrzeuge/gabelstapler_3.jpg" /></a></p>
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

export default connect(mapStateToProps)(AutosPage);
