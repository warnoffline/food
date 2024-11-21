import React, { memo } from 'react';
import Loader from '../Loader';
import s from './Button.module.scss';
import cn from 'classnames';
import Text from '../Text';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  actionSlot?: React.ReactNode;
  disabled?: boolean;
  fill?: boolean;
  view?: 'title' | 'button' | 'label' | 'p-xxl' | 'p-xl' | 'p-l' | 'p-m' | 'p-l' | 'p-s' | 'p-xs' | 'p-xxs';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
};

const Button: React.FC<ButtonProps> = ({
  loading = false,
  className = '',
  children,
  fill,
  disabled = false,
  actionSlot,
  view,
  tag,
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
        <>
          {children && (
            <Text tag={tag} view={view}>
              {children}
            </Text>
          )}
          {actionSlot}
        </>
      )}
    </button>
  );
};

export default memo(Button);
