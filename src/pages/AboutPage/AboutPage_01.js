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
import MediaQuery from 'react-responsive';
// import { Switch, Route } from 'react-router-dom';
/* eslint camelcase: 0 */
/*
import AboutPage_02 from 'pages/AboutPage/AboutPage_02';
import AboutPage_03 from 'pages/AboutPage/AboutPage_03';
import AboutPage_04 from 'pages/AboutPage/AboutPage_04';
import AboutPage_05 from 'pages/AboutPage/AboutPage_05'; */
// import debug from 'debug';

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

// const log = debug('app:about-page-01');

/* eslint camelcase: 0 */
class AboutPage_01 extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  /* constructor(props, context) {
    super(props, context);
    // this.toggleClass = this.toggleClass.bind(this);
    // this.state = {
    //  activeIndex: 4,
    // };
    // log('contructor props: ', this.props);
  } */

  componentWillMount() {
    // this.setState({ activeIndex: 4 });
  }

  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
    // log('activeIndex', this.state.activeIndex);
    // this.setState({ activeIndex: 4 });
  }

  componentWillReceiveProps() { // componentWillReceiveProps(props)
    // log('about-page-01 will receive props', props);
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  render() {
    return (
      <section id="about-page">
        <MediaQuery query="(max-device-width: 960px)">
          <AboutPageHeroTeam backgroundImage="/images/bg_radiologie.jpg" />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 961px)">
          <AboutPageHeroTeam backgroundImage="/images/team/dabir.jpg" />
        </MediaQuery>

          <Grid style={styles_custom.team_container}>
            <Row>
              <Col xs={12} className="text-left">
                <div className="text-team" style={styles_custom.team_container_caption}>
                  <h1>
                    <FormattedMessage {...messages.doctors.content.doc0} />
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

export default connect(() => ({}))(AboutPage_01);
