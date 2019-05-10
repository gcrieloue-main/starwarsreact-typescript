import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

export const TextInput = ({ type, placeholder, className, value, onChange }) => (
  <input
    placeholder={placeholder}
    className={classNames(styles.input, className)}
    type={type}
    onChange={onChange}
    value={value}
  />
);

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: undefined,
  className: undefined,
  onChange: undefined,
};
