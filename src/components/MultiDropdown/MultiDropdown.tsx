import React, { useState, useRef, useEffect } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import Input from "../Input";
import styles from "./MultiDropdown.module.scss";

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  className,
  options,
  value,
  onChange,
  disabled,
  getTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (!isOpen) {
        setSearchTerm("");
      }
    }
  };

  const handleSelectOption = (option: Option) => {
    if (!value.some((selected) => selected.key === option.key)) {
      onChange([...value, option]);
    } else {
      onChange(value.filter((selected) => selected.key !== option.key));
    }
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className={`${styles['multi-dropdown']} ${className}`} ref={dropdownRef}>
      <div className={styles.wrapper}>
        <Input
          value={value.length === 0 ? searchTerm : getTitle(value)}
          onFocus={handleToggleDropdown}
          onChange={handleInputChange}
          placeholder={value.length === 0 ? getTitle(value) : ""}
          disabled={disabled}
          color={isOpen ? "secondary" : "primary"}
          className={styles.input}
          afterSlot={
            isOpen ? (
              <ArrowDownIcon color="secondary" className={styles['icon-opened']} />
            ) : (
              <ArrowDownIcon color="secondary" />
            )
          }
        />
      </div>
      {isOpen && !disabled && (
        <ul className={styles["multi-dropdown-options"]}>
          {filteredOptions.map((option) => (
            <li
              key={option.key}
              onClick={() => handleSelectOption(option)}
              className={`${styles["multi-dropdown-option"]} ${
                value.some((selected) => selected.key === option.key)
                  ? styles.selected
                  : ""
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

export default MultiDropdown;
