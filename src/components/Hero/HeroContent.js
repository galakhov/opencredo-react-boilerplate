import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes`${fadeInUp}`;

const fadingContainer = ({ className, children }) => (
	<div className={className}>
		{children}
	</div>
);

fadingContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

const Fcontainer = styled(fadingContainer)`
  animation: 3s ${fadeAnimation};
`;

export default class HeroContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const children = this.props.children;
    return (
        <Fcontainer className={styles.content}> { /* style={styles_patients.custom_container_position} */ }
          {children || ''}
        </Fcontainer>
    );
  }
}
