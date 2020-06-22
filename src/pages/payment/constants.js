import React from 'react';
import { Table } from 'components';
import { CheckIcon } from 'components/icons';
import { CreditIcon } from './credit-icon';

export const PAYMENT_HISTORY = {
  data: [
    {
      id: 0,
      name: 'Template 24',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 1,
      name: 'Template 24',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 2,
      name: 'Template 24',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 3,
      name: 'Template 24',
      amount: '$50',
      createdAt: '12-30-2020',
    },
  ],
  columns: [
    {
      id: 'name',
      Header: 'Name',
      accessor: 'name',
    },
    {
      id: 'amount',
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      id: 'createdAt',
      Header: 'Date',
      accessor: 'createdAt',
    },
    {
      id: 'progress',
      Header: 'Actions',
      accessor: 'actions',
      Cell: () => (
        <Table.Buttons
          onView={() => {}}
          onDelete={() => {}}
        />
      ),
    },
  ],
};

export const PAYMENT_METHOD = {
  data: [
    {
      id: 0,
      name: 'Credit card',
      default: true,
      number: '**** **** **** 2345',
    },
    {
      id: 0,
      name: 'Credit card',
      default: false,
      number: '**** **** **** 2345',
    },
  ],
  columns: [
    {
      id: 'name',
      Header: 'name',
      accessor: 'name',
      Cell: ({ value }) => (
        <div className="row">
          <div className="column column--with-offsets">
            {value}
          </div>
          <div className="column column--with-offsets">
            <CreditIcon />
          </div>
        </div>
      ),
    },
    {
      id: 'amount',
      Header: 'Number',
      accessor: 'number',
    },
    {
      id: 'createdAt',
      Header: 'Default',
      accessor: 'default',
      Cell: ({ value }) => (
        !value ? 'Make default' : (
          <div className="row payment-page__default-column">
            <div className="column column--with-offsets">
              <CheckIcon />
            </div>
            <div className="column column--with-offsets">
              Default
            </div>
          </div>
        )
      ),
    },
    {
      id: 'progress',
      Header: 'Actions',
      accessor: 'actions',
      Cell: () => (
        <Table.Buttons
          onDelete={() => {}}
        />
      ),
    },
  ],
};
