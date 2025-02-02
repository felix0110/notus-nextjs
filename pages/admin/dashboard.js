import React from 'react';

// components
import CardStats from 'components/Cards/CardStats.js';
// layout for page

import Admin from 'layouts/Admin.js';

export default function Dashboard() {
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-6">
              <CardStats
                statSubtitle="用戶總量"
                statTitle="120"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-6">
              <CardStats
                statSubtitle="新增人數(最近7天)"
                statTitle="3"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-orange-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-6">
              <CardStats
                statSubtitle="USDT總量"
                statTitle="10"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="bg-pink-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-6">
              <CardStats
                statSubtitle="ETH總量"
                statTitle="90"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-percent"
                statIconColor="bg-lightBlue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-6">
              <CardStats
                statSubtitle="價值(USD)"
                statTitle="300784"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-percent"
                statIconColor="bg-lightBlue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
