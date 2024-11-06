import React from 'react';
import TransactionItem from './TransactionItem';

const transactions = [
  {
    name: "Bitcoin",
    symbol: "BTC/AUD",
    marketCap: "$20,356,211",
    change: "+3.23%",
    data: [
      { hour: 1, value: 100 },
      { hour: 5, value: 120 },
      { hour: 10, value: 90 },
      { hour: 15, value: 130 },
      { hour: 20, value: 85 },
      { hour: 25, value: 140 },
      { hour: 30, value: 110 },
    ],
  },
  {
    name: "Ethereum",
    symbol: "ETH/AUD",
    marketCap: "$15,216,971",
    change: "+1.15%",
    data: [
      { hour: 1, value: 100 },
      { hour: 5, value: 115 },
      { hour: 10, value: 95 },
      { hour: 15, value: 125 },
      { hour: 20, value: 90 },
      { hour: 25, value: 130 },
      { hour: 30, value: 105 },
    ],
  },
  {
    name: "Cardano",
    symbol: "ADA/AUD",
    marketCap: "$15,216,971",
    change: "-0.88%",
    data: [
      { hour: 1, value: 120 },
      { hour: 5, value: 100 },
      { hour: 10, value: 130 },
      { hour: 15, value: 85 },
      { hour: 20, value: 125 },
      { hour: 25, value: 80 },
      { hour: 30, value: 110 },
    ],
  },
];

function RecentTransactions() {
  return (
    <section className="w-full lg:w-[60%]  border-r border-neutral-800 p-4">
      <h2 className="text-xs font-semibold lg:mt-7 text-zinc-400 mb-4">
        Recent Transactions
      </h2>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </section>
  );
}

export default RecentTransactions;
