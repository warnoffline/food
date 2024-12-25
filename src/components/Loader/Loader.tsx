import React, { memo } from 'react';
import s from './Loader.module.scss';
import cn from 'classnames';

export type LoaderProps = {
  size?: 's' | 'm' | 'l' | 'xl';
  className?: string;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className, color }) => {
  const loaderClass = cn(s.root, s[`root-${size}`], className);

  return (
    <div className={loaderClass}>
      <div
        className={s.root__spinner}
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
