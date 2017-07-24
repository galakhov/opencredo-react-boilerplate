/* @flow */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero, HeroContent } from 'components/Hero';
import { messages } from './SchmerztherapiePage.i18n';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
// import styles from './SpectrumPage.scss';
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

const SchmerztherapiePageHero = (props) =>
(
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />

      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>

            <div className="text-left">

              <Grid style={styles_custom.container}>
                <Row>
                  <Col xs={12} className="text-left">
                      <h1>
                        <FormattedMessage {...messages.title} />
                      </h1>

                      <p><FormattedMessage {...messages.overview0} /></p>
                      <p><FormattedMessage {...messages.overview1} /></p>
                  </Col>
                </Row>
              </Grid>

          </div>
        </VAMiddle>
      </VAContainer>
    </HeroContent>
  </Hero>
);

SchmerztherapiePageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class SchmerztherapiePage extends Component {
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
      <section id="spectrum-schmerztherapie-page">
        <SchmerztherapiePageHero backgroundImage="/images/bg_radiologie_texture.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(SchmerztherapiePage);
