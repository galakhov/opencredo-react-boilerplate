/* @flow */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl'; // FormattedHTMLMessage
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
import LightboxGallery from './Gallery';

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

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-left">
                    <p><FormattedMessage {...messages.overview0} /></p>
                    {
                      /* <LightBoxComponent /> */
                    }
                      <LightboxGallery />
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
