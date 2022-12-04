import React from 'react';
import PropTypes from 'prop-types';

// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js';
import TableHeader from 'components/Table/TableHeader.js';
import TableBody from 'components/Table/TableBody';

export default function CardTable({ color, title, header, body }) {
  const a = '會員資料';
  const b = [
    'UID',
    '會員名稱',
    '電郵',
    'ERC20地址',
    '資產價值 (USD)',
    '推薦序號',
    '推薦人ID',
    '推薦人數',
    '註冊時間',
  ];
  const c = [];
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                {a}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <TableHeader color={color} headerName={b[0]} />
                <TableHeader color={color} headerName={b[1]} />
                <TableHeader color={color} headerName={b[2]} />
                <TableHeader color={color} headerName={b[3]} />
                <TableHeader color={color} headerName={b[4]} />
                <TableHeader color={color} headerName={b[5]} />
                <TableHeader color={color} headerName={b[6]} />
                <TableHeader color={color} headerName={b[7]} />
                <TableHeader color={color} headerName={b[8]} />
              </tr>
            </thead>

            <tbody>
              <tr>
                <TableBody data={b}></TableBody>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light',
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
};
