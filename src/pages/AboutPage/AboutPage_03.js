/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
// import { HeroBackground, Hero } from 'components/Hero';
import { messages } from './AboutPage.i18n';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';
import AboutPageHeroTeam from './AboutPageHeroTeam';

// <AboutPageHero backgroundImage="/images/bg00.jpg" />

/* eslint camelcase: 0 */
const styles_custom = {
  team_container: {
    position: 'absolute',
    left: '20%',
    top: '640px',
    fontFamily: 'EurostileLTW01-BoldEx2',
    fontWeight: 'bold',
  },
  team_container_span: {
    fontFamily: 'EurostileLTW01-Ex2',
    fontWeight: 'normal',
    fontSize: '1.2em',
  },
  team_container_caption: {
    borderLeft: 'solid #b3d3b3 4px',
    paddingLeft: '20px',
    paddingTop: '1px',
    paddingBottom: '7px',
  },
};

/* eslint camelcase: 0 */
class AboutPage_03 extends Component {
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
      <section id="about-page">
        <AboutPageHeroTeam backgroundImage="/images/team/poll.jpg" />
        <Grid style={styles_custom.team_container}>
          <Row>
            <Col xs={12} className="text-left">
            <div className="text-team" style={styles_custom.team_container_caption}>
              <h1>
                <FormattedMessage {...messages.doctors.content.doc2} />
              </h1>

              <p style={styles_custom.team_container_span}>
                <FormattedMessage {...messages.doctors.content.job0} />
              </p>
            </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(() => ({}))(AboutPage_03);
