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
import './styles.less';

export function Account() {
  return (
    <Layout
      className="account-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <Card>
            <Card.Content>
              <div className="account-page__row">
                <Typography.H5 normal className="account-page__title">
                  Name & Description
                </Typography.H5>
              </div>
              <div className="row row--sm">
                <div className="column column--col-2 account-page__column">
                  <Input
                    className="account-page__row"
                    label="Church Name"
                    placeholder="Enter Church Name"
                  />
                </div>
                <div className="column column--col-2">
                  <Input
                    className="account-page__row"
                    label="Subscription Type"
                    placeholder="Select Subscription"
                  />
                </div>
              </div>
              <div className="account-page__row">
                <Button>
                  Update
                </Button>
              </div>
              <div className="account-page__row">
                <Typography.H5 normal className="account-page__title">
                  Payment
                </Typography.H5>
              </div>
              <div className="row row--sm">
                <div className="column column--col-2 account-page__column">
                  <Input
                    className="account-page__row"
                    label="Next payment Date"
                    placeholder="Enter Payment Date"
                    type="date"
                  />
                </div>
                <div className="column column--col-2">
                  <Input
                    className="account-page__row"
                    label="Payment method"
                    placeholder="Enter Payment Method"
                  />
                </div>
              </div>
              <div className="account-page__row">
                <Typography.H5 normal className="account-page__title">
                  Get another church to Subscribe and you both Get 30 Days Free!
                </Typography.H5>
              </div>
              <div className="account-page__row">
                <Button>
                  Refrech Church
                </Button>
              </div>
              <div className="account-page__row">
                <Typography.H5 normal className="account-page__title">
                  Change Password
                </Typography.H5>
              </div>
              <div className="row row--sm">
                <div className="column column--col-2 account-page__column">
                  <Input
                    className="account-page__row"
                    label="New Password"
                    placeholder="Enter New Password"
                    type="password"
                  />
                </div>
                <div className="column column--col-2">
                  <Input
                    className="account-page__row"
                    label="Confirm Password"
                    placeholder="Confirm New Password"
                    type="password"
                  />
                </div>
              </div>
              <div className="account-page__row">
                <Button>
                  Save Changes
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
