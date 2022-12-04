import React from 'react';
import PropTypes from 'prop-types';

// components
import TableHeader from 'components/Table/TableHeader.js';
import TableBody from 'components/Table/TableBody';
import TableBodyline from 'components/Table/TableBodyline';

export default function CardTable({ color, title, header, body }) {
  const listOfHeader = header.map((th) => (
    <TableHeader color={color} headerName={th} />
  ));

  const listOfBody = body.map((b) => <TableBody data={b} />);
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
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {listOfHeader}
                <TableHeader color={color} headerName="Action" />
              </tr>
            </thead>

            <tbody>{listOfBody}</tbody>
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
