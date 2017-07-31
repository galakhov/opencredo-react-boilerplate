import React from 'react';
import classNames from 'classnames';
import styles from './VAlign.scss';
import PropTypes from 'prop-types';

export const VAMiddle = ({ children = '' }) => <div className={styles.middle}>{children}</div>;
export const VATop = ({ children = '' }) => <div className={styles.top}>{children}</div>;
export const VABottom = ({ children = '' }) => <div className={styles.bottom}>{children}</div>;

export const VAContainer = ({ horizontal, vertical, children = '' }) => {
  const classes = classNames({
    [styles.container]: true,
    [styles.vertical]: vertical,
    [styles.horizontal]: horizontal,
  });

  return <div className={classes}>{children}</div>;
};

VAContainer.propTypes = {
  children: PropTypes.node,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};
VAMiddle.propTypes = {
  children: PropTypes.node,
};
VATop.propTypes = {
  children: PropTypes.node,
};
VABottom.propTypes = {
  children: PropTypes.node,
};
