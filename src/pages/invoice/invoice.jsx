import React from 'react';
import {
  Layout,
  Card,
  Table,
} from 'components';
import { useLocation, useHistory } from 'react-router-dom';
import './styles.less';
import { INVOICE_HISTORY, INVOICES } from './constants';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Invoice() {
  const query = useQuery();
  const tab = query.get('tab') || 'history';
  const history = useHistory();

  return (
    <Layout
      className="invoices-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <Card.WithTabs
            active={tab}
            className="invoices-page__tabs"
            tabs={[
              {
                id: 'history',
                title: 'History',
                onClick: () => history.replace('?tab=history'),
              },
              {
                id: 'invoices',
                title: 'Invoices',
                onClick: () => history.replace('?tab=invoices'),
              },
            ]}
            content={{
              history: (
                <Table
                  columns={INVOICE_HISTORY.columns}
                  data={INVOICE_HISTORY.data}
                />
              ),
              invoices: (
                <Table
                  columns={INVOICES.columns}
                  data={INVOICES.data}
                />
              ),
            }}
          />
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
