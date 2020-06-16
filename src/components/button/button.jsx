import React from 'react';
import classNames from 'classnames';
import { ActionButton } from './action-button';
import './styles.less';

const ButtonTheme = {
  WHITE: 'white',
};

const ButtonSize = {
  SMALL: 'small',
};

export function Button({
  children,
  theme,
  type = 'text',
  className,
  onClick,
  size,
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={onClick}
      className={
      classNames({
        [className]: className,
        button: true,
        'button--white': theme === ButtonTheme.WHITE,
        [`button--${size}`]: size,
      })
    }
    >
      {children}
    </button>
  );
}

Button.Theme = ButtonTheme;
Button.Action = ActionButton;
Button.Size = ButtonSize;
