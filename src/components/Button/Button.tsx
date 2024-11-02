import React from 'react';
import Loader from '../Loader';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Класс */
  className?: string;
  /** Текст кнопки */
  children: React.ReactNode;
  /** Отключена */
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading = false, className = '', children, disabled = false, ...props }) => {
  const isDisabled = loading || disabled;

  return (
    <button
      className={`${styles.button} ${loading ? styles.loading : styles['button--action']} ${isDisabled ? styles['button--disabled'] : ''} ${className.trim()}`}
      {...props}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : props.onClick}
    >
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

export default Button;
