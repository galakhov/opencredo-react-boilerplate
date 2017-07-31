import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

export default class HeroContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const children = this.props.children;
    return (
      <div className={styles.content}> { /* style={styles_patients.custom_container_position} */ }
        {children || ''}
      </div>
    );
  }
}
