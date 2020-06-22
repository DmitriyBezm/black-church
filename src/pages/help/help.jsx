import React from 'react';
import {
  Layout,
  Header,
  Typography,
  Button,
} from 'components';
import { ROUTES } from 'constants';
import './styles.less';

export function Help() {
  return (
    <Layout
      className="help-page"
      header={(
        <Header withBorder />
      )}
    >
      <Layout.Wrapper className="help-page__wrapper">
        <Typography.H2 className="help-page__title">
          Need help?
        </Typography.H2>
        <Typography.P className="help-page__subtitle">
          Chat with our team.
        </Typography.P>
        <Button className="help-page__button">
          Send an email
        </Button>
        <Typography.H2 className="help-page__title">
          Support Center
        </Typography.H2>
        <Typography.P className="help-page__subtitle">
          Find tutorials and trouble
        </Typography.P>
        <div className="row row--justify-between row--sm">
          <div className="column--with-offsets column">
            <Button.Action
              to={ROUTES.SUPPORT}
              theme={Button.Theme.WHITE}
              className="help-page__action"
            >
              Go to Support Center
            </Button.Action>
          </div>
          <div className="column--with-offsets column">
            <Button.Action
              to={ROUTES.FAQ}
              theme={Button.Theme.WHITE}
              className="help-page__action"
            >
              Go to FAQ
            </Button.Action>
          </div>
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
