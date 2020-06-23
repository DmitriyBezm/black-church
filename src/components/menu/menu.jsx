import React, { useState } from 'react';
import { ROUTES } from 'constants';
import { useHistory } from 'react-router-dom';
import { Input } from '../input';
import { Button } from '../button';
import './styles.less';

const OPTIONS = [
  {
    value: ROUTES.PRICING,
    label: 'Pricing',
  },
  {
    value: ROUTES.PRODUCTS,
    label: 'Products',
  },
  {
    value: ROUTES.INVITE,
    label: 'Invite',
  },
  {
    value: ROUTES.LOGIN,
    label: 'Login',
  },
  {
    value: ROUTES.SIGN_UP,
    label: 'Sign-up',
  },
  {
    value: ROUTES.REVIEWS,
    label: 'Reviews',
  },
  {
    value: ROUTES.HELP,
    label: 'Help',
  },
  {
    value: ROUTES.ACCOUNT,
    label: 'Account',
  },
  {
    value: ROUTES.PAYMENT,
    label: 'Payment',
  },
  {
    value: ROUTES.DASHBOARD,
    label: 'Dashboard',
  },
  {
    value: ROUTES.INVOICES,
    label: 'Invoices',
  },
];

export function Menu() {
  const [selected, choose] = useState(OPTIONS[0]);

  const history = useHistory();

  const handleChange = (event) => {
    choose(event);
    history.push(event.value);
  };

  return (
    <Input.Select
      onChange={handleChange}
      value={[selected]}
      options={OPTIONS}
      control={({ children }) => (
        (
          <Button
            className="menu"
            tag="div"
            theme={Button.Theme.WHITE}
          >
            {children}
          </Button>
        )
      )}
    />
  );
}
