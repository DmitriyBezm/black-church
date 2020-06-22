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
  ...rest
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
    <label className={classNames({
      [className]: className,
      input: true,
      'input--focus': focused,
      'input--error': error,
      'input--warning': warning,
      'input--disabled': disabled,
      'input--readonly': readonly,
    })}
    >
      <span className="input__label">{label || placeholder || name}</span>
      <input
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
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
