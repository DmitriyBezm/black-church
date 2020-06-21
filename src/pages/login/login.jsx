import React from 'react';
import {
  Layout,
  Typography,
  Button,
  Input,
  Card,
} from 'components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';
import { Background } from './background';
import './styles.less';

export function Login() {
  return (
    <Layout
      className="login-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <div className="row login-page__head">
            <div className="column column--align-center column--flex">
              <Typography.H2 className="login-page__title" second>
                Admin User Login
              </Typography.H2>
            </div>
          </div>
          <Card className="login-page__card">
            <div className="row row--sm-reverse">
              <Card.Content className="column column--flex column--full-width login-page__form-wrap">
                <form className="login-page__form">
                  <Input
                    className="login-page__row"
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                  />
                  <Input
                    className="login-page__row"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                  />
                  <Button className="login-page__row login-page__button" type="submit">
                    Log In
                  </Button>
                  <Link className="link" to={ROUTES.SIGN_UP}>
                    Forgot your password? Click Here
                  </Link>
                </form>
              </Card.Content>
              <Card.Content className="column column--flex column--full-width column--self-stretch login-page__welcome">
                <div className="login-page__background">
                  <Background className="login-page__background-icon" />
                </div>
                <Typography.H2 second primary normal>
                  Welcome Back
                </Typography.H2>
              </Card.Content>
            </div>
          </Card>
          <div className="login-page__note-wrap">
            <Typography.P className="login-page__note">
              Login below to access your Black ChMS administrative
              account for deposit reports, transaction detail, and more.
              If you are an individual trying to manage your personal
              giving please click here to login to your personal account.
            </Typography.P>
          </div>
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
