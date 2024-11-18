import React, { memo, useCallback } from 'react';
import cn from 'classnames';
import s from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
  afterSlot?: React.ReactNode;
  color?: 'primary' | 'accent' | 'secondary';
  background?: 'white' | 'gray';
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, className, background, color, ...rest }, ref) => {
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      },
      [onChange],
    );

    const classNames = cn(s.root__field, s[`root__field-${color}`], s[`root__field__background-${background}`]);

    return (
      <div className={cn(s.root__wrapper, className)}>
        <input type="text" value={value} onChange={handleChange} className={classNames} ref={ref} {...rest} />
        {afterSlot && <div className={s.root__icon}>{afterSlot}</div>}
      </div>
    );
  },
);

export default memo(Input);
