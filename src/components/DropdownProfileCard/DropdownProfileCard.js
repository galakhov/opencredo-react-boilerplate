import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './DropdownProfileCard.scss';

const DropdownProfileCard = ({ picture, name, nickname }) =>
  (
    <Link to="/profile/edit" className={styles.container}>
      <img className={styles.picture} src={picture} />
      <span className={styles.username}>{name}</span>
      <span className={styles.nickname}>{nickname}</span>
    </Link>
  );


DropdownProfileCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string,
};

export default DropdownProfileCard;
