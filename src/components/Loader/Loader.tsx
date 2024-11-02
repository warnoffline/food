import React from 'react';
import styles from './Loader.module.scss';

export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
  /** Цвет спиннера */
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className, color }) => {
  const sizeClass = styles[`loader--${size}`];

  return (
    <div className={`${styles.loader} ${sizeClass} ${className || ''}`.trim()}>
      <div
        className={styles.loader__spinner}
        style={{
          borderTopColor: color,
          borderLeftColor: color,
          borderBottomColor: color,
        }}
      ></div>
    </div>
  );
};

export default Loader;
