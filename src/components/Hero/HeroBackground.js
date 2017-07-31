import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

export default class HeroBackground extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.background} style={{ backgroundImage: `url(${this.props.image})` }}>
      </div>
    );
  }
}
