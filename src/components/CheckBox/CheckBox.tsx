import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import CheckIcon from '../icons/CheckIcon';
import styles from './CheckBox.module.scss';

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (checked: boolean) => void;
  checked?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange, className, ...rest }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    },
    [onChange],
  );

  return (
    <label className={classNames(styles['checkbox__wrapper'], className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles['checkbox__input']}
        {...rest}
      />
      <span className={styles['checkbox__custom']}>
        {checked && (
          <CheckIcon
            className={styles['checkbox__icon']}
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

export default memo(CheckBox);
