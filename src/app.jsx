import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import { Main, Pricing } from './pages';
import './styles/index.less';

export function App() {
  return (
    <Switch>
      <Route
        exact
        path={ROUTES.MAIN}
        component={Main}
      />
      <Route
        exact
        path={ROUTES.PRICING}
        component={Pricing}
      />
    </Switch>
  );
}
