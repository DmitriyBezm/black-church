import React from 'react';
import { components } from 'react-select';
import { Input } from '../input';

export function Control({
  error,
  label,
  warning,
  isFocused,
  ...props
}) {
  return (
    <Input.Wrap
      className="input-select__wrap"
      warning={warning}
      error={error}
      label={label}
      focused={isFocused}
    >
      <components.Control
        className="input-select__control"
        {...props}
      />
    </Input.Wrap>
  );
}
