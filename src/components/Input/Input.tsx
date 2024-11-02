import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
  color?: 'primary' | 'accent' | 'secondary';
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    value,
    onChange,
    afterSlot,
    className,
    color,
    ...rest
  }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    return (
      <div className={classNames(styles['input-wrapper'], className)}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={classNames(styles['input-field'], {
            [styles['primary']]: color === 'primary',
            [styles['accent']]: color === 'accent',
            [styles['secondary']]: color === 'secondary',
          })} 
          ref={ref}
          {...rest}
        />
        {afterSlot && <div className={styles['input-icon']}>{afterSlot}</div>}
      </div>
    );
  }
);

export default Input;
