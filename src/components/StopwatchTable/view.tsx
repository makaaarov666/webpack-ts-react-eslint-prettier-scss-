import React from 'react';
import { useTable, Column } from 'react-table';

import StopwatchTableBody from 'components/StopwatchTableBody';

import TProps from './types';

import { Table, Background } from './styles';

const columns: Column[] = [
  {
    accessor: 'col1',
  },
  {
    accessor: 'col2',
  },
];

const View = ({ circleTimes }: TProps) => {
  const data = circleTimes.map((circleItemTime: number, index: number) => ({
    col1: `круг ${index + 1}`,
    col2: `${circleItemTime} сек.`,
  }));

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const { role: tableRole } = getTableProps();
  const { role: rowRole } = getTableBodyProps();

  return (
    <Background>
      <Table role={tableRole}>
        <StopwatchTableBody
          rowRole={rowRole}
          rows={rows}
          prepareRow={prepareRow}
        />
      </Table>
    </Background>
  );
};

export default View;
