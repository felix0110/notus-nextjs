import React from 'react';

// components

import CardTable from 'components/Cards/CardTable.js';

// layout for page

import Admin from 'layouts/Admin.js';

export default function MembersInfo() {
  const header = [
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
  const title = '會員資料';

  const body = [
    [
      '1',
      'Keeny',
      '372 5055 9855',
      '0x1234567890123567890',
      '10000',
      'ASKVD32',
      '489472',
      '1',
      '1/1/2022 3:10:10PM',
    ],
    [
      '2',
      'Peter',
      'iabic@gmail.com',
      '0x1234567890123567890',
      '10000',
      'ASKVD32',
      '489472',
      '3',
      '1/1/2022 3:10:10PM',
    ],
  ];
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable header={header} title={title} body={body} />
        </div>
      </div>
    </>
  );
}

MembersInfo.layout = Admin;
