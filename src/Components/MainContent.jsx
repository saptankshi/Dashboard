import React from 'react';
import Header from './Header';
import TotalBalance from './TotalBalance';
import RecentTransactions from './RecentTransactions';
import PortfolioChart from './PortfolioChart';
import CoinOverview from './CoinOverview';

function MainContent() {
  return (
    <main data-layername="column" className="flex flex-col overflow-hidden  ml-5 lg:ml-[20%] lg:w-[81%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col py-px w-full min-h-[649px] max-md:max-w-full">
        <Header />
        <div className="flex relative z-10 flex-wrap">
          <TotalBalance />
          <PortfolioChart />
          <div className='hidden md:block lg:hidden'>
          <CoinOverview  />
          </div>
          <RecentTransactions />
          <div className='block md:hidden lg:block'>
          <CoinOverview  />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;