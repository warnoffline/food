import React, { memo } from 'react';
import Loader from '../Loader';
import s from './Button.module.scss';
import cn from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  fill?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  loading = false,
  className = '',
  children,
  fill,
  disabled = false,
  ...props
}) => {
  const isDisabled = loading || disabled;
  const buttonClass = cn(s.root, {
    [s.loading]: loading,
    [s['root-disabled']]: isDisabled,
    [s['root-action']]: !loading && !isDisabled,
    [s['root-fill']]: fill,
    [className]: className.trim() !== '',
  });

  return (
    <button className={buttonClass} {...props} disabled={isDisabled} onClick={isDisabled ? undefined : props.onClick}>
      {loading ? (
        <>
          <Loader color="#fff" size="s" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default memo(Button);
