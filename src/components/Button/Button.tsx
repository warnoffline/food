import React, { memo } from 'react';
import Loader from '../Loader';
import styles from './Button.module.scss';
import classNames from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading = false, className = '', children, disabled = false, ...props }) => {
  const isDisabled = loading || disabled;
  const buttonClass = classNames(styles.button, {
    [styles.loading]: loading,
    [styles['button--disabled']]: isDisabled,
    [styles['button--action']]: !loading && !isDisabled,
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
