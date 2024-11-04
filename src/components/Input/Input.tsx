import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
  afterSlot?: React.ReactNode;
  color?: 'primary' | 'accent' | 'secondary';
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, className, color, ...rest }, ref) => {
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      },
      [onChange],
    );

    return (
      <div className={classNames(styles['input__wrapper'], className)}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={classNames(styles['input__field'], {
            [styles['input__field--primary']]: color === 'primary',
            [styles['input__field--accent']]: color === 'accent',
            [styles['input__field--secondary']]: color === 'secondary',
          })}
          ref={ref}
          {...rest}
        />
        {afterSlot && <div className={styles['input__icon']}>{afterSlot}</div>}
      </div>
    );
  },
);

export default memo(Input);
