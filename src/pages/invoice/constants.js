import React from 'react';
import { Table } from 'components';

export const INVOICE_HISTORY = {
  data: [
    {
      id: 0,
      name: 'Adam Sendler',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 1,
      name: 'Adam Sendler',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 2,
      name: 'Adam Sendler',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 3,
      name: 'Adam Sendler',
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

export const INVOICES = {
  data: [
    {
      id: 0,
      client: 'Adam Sendler',
      amount: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 1,
      client: 'Adam Sendler',
      amount: '$50',
      createdAt: '12-30-2020',
    },
  ],
  columns: [
    {
      id: 'client',
      Header: 'Client',
      accessor: 'client',
    },
    {
      id: 'amount',
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      id: 'createdAt',
      Header: 'Client',
      accessor: 'client',
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
