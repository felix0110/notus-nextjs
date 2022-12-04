import React from 'react';
import TableDropdown from 'components/Dropdowns/TableDropdown.js';
import TableBodyline from './TableBodyline';

export default function TableBody({ data }) {
  const listOfBody = data.map((td) => <TableBodyline data={td} />);
  return (
    <tr>
      {listOfBody}
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <TableDropdown />
      </td>
    </tr>
  );
}
