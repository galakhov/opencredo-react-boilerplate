/* @flow */
import React, { PropTypes, Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { Grid, Row, Col } from 'react-bootstrap';
// import { Hero } from 'components/Hero'; // HeroBackground
import { messages } from './PatientenPage.i18n';
import PatientenPageHero from './PatientenPageHero';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';


class PatientenPage extends Component {
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
      <section id="patienten-page">
        <PatientenPageHero backgroundImage="/images/bg_radiologie_patients.jpg" />
        {
          /*
          <Hero displayUnderNavbar>
            <HeroBackground image="/images/bg.jpg" />
          </Hero>
          <Grid>
            <Row>
              <Col xs={12} className="text-center">
                <h1>
                  <FormattedMessage {...messages.title} />
                </h1>
                <p>
                  <FormattedMessage {...messages.overview} />
                </p>
              </Col>
            </Row>
          </Grid>
          */
        }
      </section>
    );
  }
}

export default connect(() => ({}))(PatientenPage);
