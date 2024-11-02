import React from 'react';
import classNames from 'classnames';
import CheckIcon from '../icons/CheckIcon';
import styles from './CheckBox.module.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
  /** Indicates if the checkbox is checked */
  checked?: boolean; 
};

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  className,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  
  return (
    <label className={classNames(styles['checkbox-wrapper'], className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles['checkbox-input']}
        {...rest}
      />
      <span className={styles['checkbox-custom']}>
        {checked && (
          <CheckIcon
            className={styles['checkbox-icon']}
            strokeWidth={2}
            width={24}
            height={24} 
            color={rest.disabled ? 'disabled' : 'accent'}
          />
        )}
      </span>
    </label>
  );
};

export default CheckBox;
