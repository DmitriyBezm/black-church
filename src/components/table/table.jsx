import React from 'react';
import classNames from 'classnames';
import { useTable } from 'react-table';
import { ActionButtons } from './table-buttons';
import './styles.less';

export function Table({
  className,
  columns,
  data,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className={classNames({ [className]: className, table: true })}>
      <thead className="table__head">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table__head-row">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="table__head-cell">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="table__body">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table__body-row">
              {row.cells.map((cell) => <td {...cell.getCellProps()} className="table__body-cell">{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.Buttons = ActionButtons;
