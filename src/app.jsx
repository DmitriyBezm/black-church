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
    </Switch>
  );
}
