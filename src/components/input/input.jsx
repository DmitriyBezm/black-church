import React, { useState } from 'react';
import { WithButton } from './with-button';
import { Clipboard } from './clipboard';
import { Select } from './select';
import { InputWrap } from './input-wrap';
import './styles.less';

export function Input({
  onChange,
  value,
  onFocus,
  onBlur,
  type = 'text',
  label,
  name,
  placeholder,
  className,
  error,
  warning,
  disabled,
  readonly,
  isFocused,
}) {
  const message = warning || error;
  const [focused, setFocus] = useState(false);

  const handleFocus = (event) => {
    setFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setFocus(false);
    if (onFocus) {
      onBlur(event);
    }
  };

  return (
    <InputWrap
      className={className}
      error={error}
      warning={warning}
      disabled={disabled}
      readonly={readonly}
      focused={isFocused || focused}
      label={label}
    >
      <label className="input__label-node">
        <input
          className="input__input-node"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {message && (
          <span className="input__message">{message}</span>
        )}
      </label>
    </InputWrap>
  );
}

Input.WithButton = WithButton;
Input.Clipboard = Clipboard;
Input.Select = Select;
Input.Wrap = InputWrap;
