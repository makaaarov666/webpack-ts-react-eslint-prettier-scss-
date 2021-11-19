import React from 'react';

import TProps from './types';

import Tbody from './styles';

const View = ({ rowRole, rows, prepareRow }: TProps) => (
  <Tbody role={rowRole}>
    {rows.map((row) => {
      prepareRow(row);
      const { key, role } = row.getRowProps();

      return (
        <tr key={key} role={role}>
          {row.cells.map((cell) => {
            const { key, role } = cell.getCellProps();

            return (
              <td key={key} role={role}>
                {cell.render('Cell')}
              </td>
            );
          })}
        </tr>
      );
    })}
  </Tbody>
);

export default View;
