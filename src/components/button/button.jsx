import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ActionButton } from './action-button';
import { IconButton } from './icon-button';
import { LoginButton } from './login-button';
import { SignUpButton } from './sign-up-button';
import './styles.less';

const ButtonTheme = {
  WHITE: 'white',
  OUTLINE: 'outline',
  TEXT: 'text',
};

const ButtonSize = {
  SMALL: 'small',
  EXTRA_SMALL: 'extra-small',
};

export function Button({
  children,
  theme,
  type = 'text',
  className,
  tag,
  onClick,
  size,
  to,
  target,
}) {
  let Tag = 'button';

  if (tag) {
    Tag = tag;
  }

  if (to) {
    Tag = Link;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <Tag
      type={type}
      onClick={onClick}
      to={to}
      target={target}
      className={
      classNames({
        [className]: className,
        button: true,
        'button--white': theme === ButtonTheme.WHITE,
        'button--outline': theme === ButtonTheme.OUTLINE,
        'button--text': theme === ButtonTheme.TEXT,
        [`button--${size}`]: size,
      })
    }
    >
      {children}
    </Tag>
  );
}

Button.Theme = ButtonTheme;
Button.Action = ActionButton;
Button.Size = ButtonSize;
Button.Icon = IconButton;
Button.Login = LoginButton;
Button.SignUp = SignUpButton;
