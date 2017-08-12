import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import Spinner from 'components/Spinner/Spinner';

const mapStateToProps = ({ spinner }) => ({ spinner });
const HeroPageLayout = (props) =>
  (
    <div className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
      <Spinner
        canShow={props.spinner.canShow}
        messageId={props.spinner.messageId}
      />
    </div>
  );

HeroPageLayout.propTypes = {
  spinner: PropTypes.object,
  children: PropTypes.object,
};

export default connect(mapStateToProps)(HeroPageLayout);
