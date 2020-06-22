import React, { useState } from 'react';
import classNames from 'classnames';
import { WithButton } from './with-button';
import { Clipboard } from './clipboard';
import { Select } from './select';
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
  fake
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
    <label
      className={classNames({
        [className]: className,
        input: true,
        'input--focus': focused,
        'input--error': error,
        'input--warning': warning,
        'input--disabled': disabled,
        'input--readonly': readonly,
        'input--hidden': fake,
      })}
    >
      <span className="input__label">{label || placeholder || name}</span>
      {fake && !value && (
        <div
          className="input__field input__placeholder"
        >
          {placeholder}
        </div>
      )}
      {fake && value && (
        <div
          className="input__field input__field--fake"
        >
          {value}
        </div>
      )}
      <input
        className="input__field"
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
  );
}

Input.WithButton = WithButton;
Input.Clipboard = Clipboard;
Input.Select = Select;
