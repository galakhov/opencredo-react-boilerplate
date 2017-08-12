import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) =>
  <a onClick={props.onClick}>Login</a>;


Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Login;
