import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './pages';
import './styles/index.less';

export function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Main}
      />
    </Switch>
  )
}
