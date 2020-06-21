import React from 'react';
import { ROUTES } from 'constants';
import { Button } from './button';

export function LoginButton({ className }) {
  return (
    <Button
      className={className}
      size={Button.Size.SMALL}
      to={ROUTES.LOGIN}
    >
      Log In
    </Button>
  );
}
