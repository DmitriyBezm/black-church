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
  to,
}) {
  const Tag = to ? Link : 'button';
  return (
    // eslint-disable-next-line react/button-has-type
    <Tag
      type={type}
      onClick={onClick}
      to={to}
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
    </Tag>
  );
}

Button.Theme = ButtonTheme;
Button.Action = ActionButton;
Button.Size = ButtonSize;
Button.Icon = IconButton;
Button.Login = LoginButton;
Button.SignUp = SignUpButton;
