import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import { CharacterHeader } from '../../../user';

export const Layout = ({ children }) => (
  <div>
    <div className={styles.header}>
      <h1>Star Wars App</h1>
      <CharacterHeader />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
