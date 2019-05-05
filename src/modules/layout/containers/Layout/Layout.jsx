import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Layout = ({ children }) => (
  <div>
    <div className={styles.layout}>Layout</div>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
