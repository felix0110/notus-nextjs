import React from 'react';

// components

import CardTable from 'components/Cards/CardTable.js';

// layout for page

import Admin from 'layouts/Admin.js';

export default function MembersConfirm() {
  const title = '實名認證';

  const header = ['UID', '會員名稱', '狀態', '地區', '正面', '反面'];

  const body = [
    ['1545663', 'asf124', '已認證', 'US', '[URL]', '[URL]'],
    ['1545663', 'asf124', '未認證', 'UK', '[URL]', '[URL]'],
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

MembersConfirm.layout = Admin;
