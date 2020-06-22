import React from 'react';
import {
  Layout,
  Typography,
  Button,
  Input,
  Card,
  Header
} from 'components';
import './styles.less';

export function SignUp() {
  return (
    <Layout
      className="sign-up-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
      header={(
        <Header authorized={false} />
      )}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <div className="row sign-up-page__head">
            <div className="column column--align-center column--flex">
              <Typography.H2 className="sign-up-page__title" second>
                Free Sign Up
              </Typography.H2>
              <Typography.P className="sign-up-page__subtitle" second>
                Get ready to collect donations digitally in less than 5 minutes.
              </Typography.P>
            </div>
          </div>
          <Card className="sign-up-page__card">
            <Card.Content className="row row--sm row--align-start row-justify-between">
              <div
                className="
                    column
                    column--flex
                    column--col-2
                    sign-up-page__column
                  "
              >
                <form className="sign-up-page__form">
                  <Input
                    className="sign-up-page__row"
                    label="First Name"
                    placeholder="First Name"
                  />
                  <Input
                    className="sign-up-page__row"
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                  />
                  <Input
                    className="sign-up-page__row"
                    label="Phone"
                    placeholder="Phone"
                    type="number"
                  />
                </form>
              </div>
              <div
                className="
                    column
                    column--flex
                    column--col-2
                  "
              >
                <Input
                  className="sign-up-page__row"
                  label="e.g. Doe"
                  placeholder="Last Name"
                />
                <Input
                  className="sign-up-page__row"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
                <Button className="sign-up-page__row sign-up-page__button" type="submit">
                  Sign Up
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
