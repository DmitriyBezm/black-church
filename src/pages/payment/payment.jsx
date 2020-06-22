import React from 'react';
import {
  Layout,
  Button,
  Card,
  Table,
} from 'components';
import { useLocation, useHistory } from 'react-router-dom';
import './styles.less';
import { PAYMENT_HISTORY, PAYMENT_METHOD } from './constants';
import { NewCard } from './new-card';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Payment() {
  const query = useQuery();
  const tab = query.get('tab') || 'history';
  const isNew = Boolean(query.get('new-card'));
  const history = useHistory();

  const handleAdd = () => {
    history.replace('?tab=method&new-card=true');
  };

  return (
    <Layout
      className="payment-page"
      theme={Layout.Theme.BG_PRIMARY_LIGHT}
    >
      <Layout.Wrapper>
        <div className="container container--small">
          <Card.WithTabs
            active={tab}
            className="payment-page__tabs"
            tabs={[
              {
                id: 'history',
                title: 'History',
                onClick: () => history.replace('?tab=history'),
              },
              {
                id: 'method',
                title: 'Method',
                onClick: () => history.replace('?tab=method'),
              },
            ]}
            content={{
              history: (
                <Table
                  columns={PAYMENT_HISTORY.columns}
                  data={PAYMENT_HISTORY.data}
                />
              ),
              method: (
                !isNew
                  ? (
                    <React.Fragment>
                      <Table
                        columns={PAYMENT_METHOD.columns}
                        data={PAYMENT_METHOD.data}
                      />
                      <Card.Content>
                        <div className="row row--justify-end">
                          <Button onClick={handleAdd}>
                            Add new Card
                          </Button>
                        </div>
                      </Card.Content>
                    </React.Fragment>
                  )
                  : (
                    <NewCard />
                  )
              ),
            }}
          />
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
