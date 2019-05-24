import React from 'react';
import styles from './AttributeLine.scss';

export type AttributeLineProps = {
  label: string;
  value?: string;
};

export const AttributeLine = ({ label, value }: AttributeLineProps) => (
  <p>
    <strong className={styles.label}>{label}</strong>
    {value}
  </p>
);
