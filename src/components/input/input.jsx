import React from 'react';
import classNames from 'classnames';
import { WithButton } from './with-button';
import { Clipboard } from './clipboard';
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
  focus,
  error,
  warning,
  disabled,
  readonly,
  ...rest
}) {
  const message = warning || error;
  return (
    <label className={classNames({
      [className]: className,
      input: true,
      'input--focus': focus,
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
        onFocus={onFocus}
        onBlur={onBlur}
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
