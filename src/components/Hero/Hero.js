import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
import classNames from 'classnames';

export default class Hero extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    displayUnderNavbar: PropTypes.bool,
    small: PropTypes.bool,
  };

  render() {
    const classes = classNames({
      [styles.hero]: true,
      [styles['move-up']]: this.props.displayUnderNavbar,
      [styles['hero-small']]: this.props.small,
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
