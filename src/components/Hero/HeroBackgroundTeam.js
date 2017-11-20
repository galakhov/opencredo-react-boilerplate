import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

export default class HeroBackground extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.background_with_animation} style={{ backgroundImage: `url(${this.props.image})`, backgroundPositionX: '50%' }}>
      </div>
    );
  }
}
