import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import './styles/index.less';
import {
  Invite,
  Main,
  Pricing,
  Login,
  SignUp,
  Reviews,
  Help,
  Products,
  Product,
  Account,
  Payment,
  Dashboard,
  Invoice,
} from './pages';

export function App() {
  return (
    <Switch>
      <Route
        exact
        path={ROUTES.MAIN}
        component={Main}
      />
      <Route
        path={ROUTES.PRICING}
        component={Pricing}
      />
      <Route
        path={ROUTES.INVITE}
        component={Invite}
      />
      <Route
        path={ROUTES.LOGIN}
        component={Login}
      />
      <Route
        path={ROUTES.SIGN_UP}
        component={SignUp}
      />
      <Route
        path={ROUTES.REVIEWS}
        component={Reviews}
      />
      <Route
        path={ROUTES.HELP}
        component={Help}
      />
      <Route
        path={ROUTES.ACCOUNT}
        component={Account}
      />
      <Route
        exact
        path={ROUTES.PRODUCTS}
        component={Products}
      />
      <Route
        path={`${ROUTES.PRODUCTS}/:id`}
        component={Product}
      />
      <Route
        path={ROUTES.PAYMENT}
        component={Payment}
      />
      <Route
        path={ROUTES.DASHBOARD}
        component={Dashboard}
      />
      <Route
        path={ROUTES.INVOICES}
        component={Invoice}
      />
    </Switch>
  );
}
