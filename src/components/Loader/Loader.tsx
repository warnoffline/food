import React, { memo } from 'react';
import styles from './Loader.module.scss';
import classNames from 'classnames';

export type LoaderProps = {
  size?: 's' | 'm' | 'l';
  className?: string;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className, color }) => {
  const loaderClass = classNames(styles.loader, styles[`loader--${size}`], className);

  return (
    <div className={loaderClass}>
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

export default memo(Loader);
