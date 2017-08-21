/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl'; // FormattedMessage,
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero, HeroContent } from 'components/Hero';
import config from './KontaktPage.i18n';
import { messages } from './KontaktPage.i18n';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './KontaktPage.scss';
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

const KontaktPageHero = (props) =>
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
                    <p><FormattedHTMLMessage {...messages.overview0} /></p>
                    <p><FormattedHTMLMessage {...messages.overview1} /></p>
                    <p><FormattedHTMLMessage {...messages.overview2} /></p>
                    <p><FormattedHTMLMessage {...messages.overview3} /></p>
                  </Col>
                </Row>
              </Grid>

          </div>
        </VAMiddle>
      </VAContainer>
    </HeroContent>
  </Hero>
);

KontaktPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class KontaktPage extends Component {
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
      <section id="kontakt-radiologie">
        <KontaktPageHero backgroundImage="/images/galerie/aussen3.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(KontaktPage);

/*
  <h1>
    <FormattedMessage {...messages.title} />
  </h1>
*/
