import React from 'react';
import PropTypes from 'prop-types';

import styles from './AttributeLine.scss';

export const AttributeLine = ({ label, value }) => (
  <p>
    <strong className={styles.label}>{label}</strong>
    {value}
  </p>
);

AttributeLine.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
