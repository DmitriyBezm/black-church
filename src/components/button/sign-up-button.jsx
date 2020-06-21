import React from 'react';
import { ROUTES } from 'constants';
import { Button } from './button';

export function SignUpButton({ className }) {
  return (
    <Button.Action
      className={className}
      theme={Button.Theme.WHITE}
      size={Button.Size.SMALL}
      to={ROUTES.SIGN_UP}
    >
      Sign Up Free
    </Button.Action>
  );
}
