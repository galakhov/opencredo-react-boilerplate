import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

export default class HeroStartpageBackground extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
  };
  // this component differs from standard 'HeroBackground' one.
  render() {
    return (
      <div className={styles.background_start_page} style={{ backgroundImage: `url(${this.props.image})` }}>
      </div>
    );
  }
}
