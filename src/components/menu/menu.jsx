import React, { useState } from 'react';
import classNames from 'classnames';
import { ROUTES } from 'constants';
import ReactSelect, { components } from 'react-select';
import { useHistory } from 'react-router-dom';
import { InputContainer } from './input-container';
import './styles.less';

const controlStyles = () => ({
  display: 'flex',
  width: '100%',
});

const containerStyles = () => ({ width: '100%' });

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
    history.push(event.value)
  };

  return (
    <ReactSelect
      options={OPTIONS}
      isSearchable={false}
      value={selected}
      onChange={handleChange}
      components={{
        Control: ({ getStyles, children, ...values }) => (
          <components.Control
            getStyles={controlStyles}
            {...values}
          >
            {children[0]}
          </components.Control>
        ),
        ValueContainer: ({
          getStyles,
          children,
          getValue,
          ...values
        }) => {
          const [, defaultInput] = children;
          const { props: childProps } = defaultInput;
          const [selected = {}] = getValue();
          const { selectProps: { menuIsOpen } } = values;
          return (
            <components.ValueContainer
              {...values}
              getStyles={containerStyles}
            >
              <div className={
                classNames({
                  menu: true,
                  'menu--open': menuIsOpen,
                })
              }
              >
                <InputContainer
                  {...childProps}
                  value={selected.label || ''}
                  fake
                />
              </div>
            </components.ValueContainer>
          );
        },
      }}
    />
  );
}
