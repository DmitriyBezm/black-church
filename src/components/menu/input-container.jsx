import React from 'react';
import { Button } from '../button';

export function InputContainer({
  value,
  onBlur,
  onFocus,
  onChange,
  disabled,
  onClick,
}) {
  return (
    <label className="menu__label">
      <input
        className="menu__input"
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
      <Button
        onClick={onClick}
        className="menu__button"
        theme={Button.Theme.WHITE}
        size={Button.Size.SMALL}
      >
        {value}
      </Button>
    </label>
  );
}
