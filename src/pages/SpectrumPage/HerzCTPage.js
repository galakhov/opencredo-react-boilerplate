/* @flow */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero, HeroContent } from 'components/Hero';
import { messages } from './HerzCTPage.i18n';
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

const HerzCTPageHero = (props) =>
(
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroBackground image={"./images/header_bg.png"} />

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

                      <p><FormattedHTMLMessage {...messages.desc0} /></p>
                  </Col>
                </Row>
              </Grid>

          </div>
        </VAMiddle>
      </VAContainer>
    </HeroContent>
  </Hero>
);

HerzCTPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

class HerzCTPage extends Component {
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
      <section id="spectrum-herzct-page">
        <HerzCTPageHero backgroundImage="/images/bg00.jpg" />
      </section>
    );
  }
}

export default connect(() => ({}))(HerzCTPage);
