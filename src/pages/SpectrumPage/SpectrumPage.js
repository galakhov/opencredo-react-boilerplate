/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero, HeroContent } from 'components/Hero';
import config from './SpectrumPage.i18n';
import { messages } from './SpectrumPage.i18n';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './SpectrumPage.scss';
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
  ul: {
    paddingTop: 10,
    listStyleType: 'circle',
    paddingLeft: 18,
  },
};

const SpectrumPageHero = (props) =>
(
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroBackground image={"./images/header_bg.png"} />

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
                    <ul style={styles_custom.ul}>
                      <li><FormattedMessage {...messages.overview0} /></li>
                      <li><FormattedMessage {...messages.overview1} /></li>
                      <li><FormattedMessage {...messages.overview2} /></li>
                      <li><FormattedMessage {...messages.overview3} /></li>
                      <li><FormattedMessage {...messages.overview4} /></li>
                      <li><FormattedMessage {...messages.overview5} /></li>
                      <li><FormattedMessage {...messages.overview6} /></li>
                      <li><FormattedMessage {...messages.overview7} /></li>
                      <li><FormattedMessage {...messages.overview8} /></li>
                      <li><FormattedMessage {...messages.overview9} /></li>
                      <li><FormattedMessage {...messages.overview10} /></li>
                      <li><FormattedMessage {...messages.overview11} /></li>
                    </ul>
                  </Col>
                </Row>
              </Grid>

          </div>
        </VAMiddle>
      </VAContainer>
    </HeroContent>
  </Hero>
);

SpectrumPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class SpectrumPage extends Component {
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
      <section id="spectrum-page">
        <SpectrumPageHero backgroundImage="/images/bg00.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(SpectrumPage);
