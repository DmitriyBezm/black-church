import React from 'react';
import { Button } from '../button';

export function InputContainer({
  onClick,
  value,
  onBlur,
  onFocus,
  onChange,
  disabled,
}) {
  return (
    <label className="menu__label">
      <Button
        className="menu__button"
        tag="span"
        theme={Button.Theme.WHITE}
        size={Button.Size.SMALL}
      >
        {value}
      </Button>
      <input
        onClick={onClick}
        className="menu__input"
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
    </label>
  );
}
