/* @flow */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero, HeroContent } from 'components/Hero';
import config from './GalleryPage.i18n';
import { messages } from './GalleryPage.i18n';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './GalleryPage.scss';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

/* eslint camelcase: 0 */
const styles_custom = {
  container: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const GaleriePageHero = (props) =>
(
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />

      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>

            <div className="text-left">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>
                {config.description0}
              </p>

              <p className={styles['hero-description']}>
                {config.description1}
              </p>

              <p className={styles['hero-description']}>
                {config.description2}
              </p>

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-left">
                    {
                      /*
                      <h1>
                        <FormattedMessage {...messages.title} />
                      </h1>
                      */
                    }
                    <p><FormattedMessage {...messages.overview0} /></p>
                    <p><FormattedHTMLMessage {...messages.overview1} /></p>
                    <p><FormattedHTMLMessage {...messages.overview2} /></p>
                    <p><FormattedHTMLMessage {...messages.overview3} /></p>
                    <p><FormattedHTMLMessage {...messages.overview4} /></p>
                    <p><FormattedHTMLMessage {...messages.overview5} /></p>
                    <p><FormattedHTMLMessage {...messages.overview6} /></p>
                    <p><FormattedHTMLMessage {...messages.overview7} /></p>
                    <p><FormattedHTMLMessage {...messages.overview8} /></p>
                    <p><FormattedHTMLMessage {...messages.overview9} /></p>
                  </Col>
                </Row>
              </Grid>

          </div>
        </VAMiddle>
      </VAContainer>
    </HeroContent>
  </Hero>
);

GaleriePageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class GalleryPage extends Component {
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
      <section id="galerie-page">
        <GaleriePageHero backgroundImage="/images/bg00.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(GalleryPage);
