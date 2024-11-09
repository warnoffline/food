import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import Input from '../Input';
import s from './MultiDropdown.module.scss';
import { Option } from '@/types/recipes';

export type MultiDropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({ className, options, value, onChange, disabled, getTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(options.filter((option) => option.value.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, options]);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, []);

  const handleToggleDropdown = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (!isOpen) {
        setSearchTerm('');
      }
    }
  }, [disabled, isOpen]);

  const handleSelectOption = useCallback(
    (option: Option) => {
      if (!value.some((selected) => selected.key === option.key)) {
        onChange([...value, option]);
      } else {
        onChange(value.filter((selected) => selected.key !== option.key));
      }
    },
    [onChange, value],
  );

  const handleInputChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return (
    <div ref={dropdownRef} className={`${s.root} ${className}`}>
      <div className={s.root__wrapper}>
        <Input
          value={value.length === 0 ? searchTerm : getTitle(value)}
          onFocus={handleToggleDropdown}
          onChange={handleInputChange}
          placeholder={value.length === 0 ? getTitle(value) : ''}
          disabled={disabled}
          color={isOpen ? 'secondary' : 'primary'}
          className={s.root__input}
          afterSlot={
            <ArrowDownIcon
              onClick={handleToggleDropdown}
              color="secondary"
              className={isOpen ? s['root__icon-opened'] : ''}
            />
          }
        />
      </div>
      {isOpen && !disabled && (
        <ul className={s.root__options}>
          {filteredOptions.map((option) => (
            <li
              key={option.key}
              onClick={() => handleSelectOption(option)}
              className={`${s.root__option} ${
                value.some((selected) => selected.key === option.key) ? s['root__option-selected'] : ''
              }`}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(MultiDropdown);
