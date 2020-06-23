import React from 'react';
import {
  Layout,
  Button,
  Card,
  Table,
} from 'components';
import './styles.less';
import { SUBSCRIBERS } from './constants';

export function Dashboard() {
  return (
    <Layout
      className="dashboard-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <Card.WithTabs
            className="dashboard-page__tabs"
            tabs={[
              {
                id: 'subscribers',
                title: 'Subscribers',
              },
            ]}
            content={{
              subscribers: (
                <Table
                  columns={SUBSCRIBERS.columns}
                  data={SUBSCRIBERS.data}
                />
              ),
            }}
            footer={(
              <div className="row row--sm row--justify-center">
                <div className="column column--with-offsets">
                  <Button
                    theme={Button.Theme.WHITE}
                    className="dashboard-page__button"
                  >
                    Lorem Ipsum
                  </Button>
                </div>
                <div className="column column--with-offsets">
                  <Button
                    theme={Button.Theme.WHITE}
                    className="dashboard-page__button"
                  >
                    Lorem Ipsum
                  </Button>
                </div>
                <div className="column column--with-offsets">
                  <Button
                    theme={Button.Theme.WHITE}
                    className="dashboard-page__button"
                  >
                    Church details
                  </Button>
                </div>
              </div>
            )}
          />
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
