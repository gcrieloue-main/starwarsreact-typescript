import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

export const Button = ({ onClick, children, secondary }) => (
  <button
    className={classNames(styles.button, {
      [styles.secondary]: secondary,
    })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  secondary: false,
};
