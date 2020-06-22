import React from 'react';
import { Table } from 'components';

export const SUBSCRIBERS = {
  data: [
    {
      id: 0,
      church: 'Template 24',
      contact: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 1,
      church: 'Template 24',
      contact: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 2,
      church: 'Template 24',
      contact: '$50',
      createdAt: '12-30-2020',
    },
    {
      id: 3,
      church: 'Template 24',
      contact: '$50',
      createdAt: '12-30-2020',
    },
  ],
  columns: [
    {
      id: 'church',
      Header: 'Church',
      accessor: 'church',
    },
    {
      id: 'contact',
      Header: 'Contact',
      accessor: 'contact',
    },
    {
      id: 'createdAt',
      Header: 'Date Subscribers',
      accessor: 'createdAt',
    },
    {
      id: 'progress',
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row: { index } }) => {
        return (
          <Table.Buttons
            selected={index % 2 === 0}
            onSelect={() => {}}
          />
        )
      },
    },
  ],
};
