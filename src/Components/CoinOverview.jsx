import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const coinData = [
  {
    name: "Bitcoin",
    action: "Buy",
    amount: "-$5,642",
    time: "Today, 15:20 PM",
    data: [
      { hour: 1, value: 120 },
      { hour: 2, value: 110 },
      { hour: 3, value: 115 },
      { hour: 4, value: 105 },
      { hour: 5, value: 125 },
      { hour: 6, value: 100 },
    ],
  },
  {
    name: "Ethereum",
    action: "Received",
    amount: "+0.245 ETH",
    time: "Today, 10:20 AM",
    data: [
      { hour: 1, value: 90 },
      { hour: 2, value: 95 },
      { hour: 3, value: 85 },
      { hour: 4, value: 100 },
      { hour: 5, value: 105 },
      { hour: 6, value: 98 },
    ],
  },
  {
    name: "Polkadot",
    action: "Buy",
    amount: "-$3,100",
    time: "Today, 9:20 AM",
    data: [
      { hour: 1, value: 110 },
      { hour: 2, value: 105 },
      { hour: 3, value: 115 },
      { hour: 4, value: 100 },
      { hour: 5, value: 95 },
      { hour: 6, value: 85 },
    ],
  },
  {
    name: "EOS",
    action: "Buy",
    amount: "-1.235 EOS",
    time: "Yesterday, 15:20 PM",
    data: [
      { hour: 1, value: 80 },
      { hour: 2, value: 75 },
      { hour: 3, value: 85 },
      { hour: 4, value: 70 },
      { hour: 5, value: 60 },
      { hour: 6, value: 55 },
    ],
  },
  {
    name: "Cardano",
    action: "Received",
    amount: "$3,612",
    time: "Yesterday, 17:20 PM",
    data: [
      { hour: 1, value: 95 },
      { hour: 2, value: 100 },
      { hour: 3, value: 110 },
      { hour: 4, value: 105 },
      { hour: 5, value: 115 },
      { hour: 6, value: 120 },
    ],
  },
];

function CoinOverview() {
  return (
    <section className="flex flex-col ml-6 lg:ml-10 lg:mt-0 md:mt-5 items-center mb-10 md:mb-4 justify-center p-4 bg-black rounded-xl border border-neutral-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-zinc-400 text-sm font-semibold">Your Portfolio</h3>
        <button className="text-zinc-400 text-xl">+</button>
      </div>
      {coinData.map((coin, index) => (
        <div key={index} className="flex items-center justify-between p-2 border-b border-neutral-800">
          <div className="flex flex-col ">
            <span className="text-xs text-neutral-400">{coin.name}</span>
            <span className="text-xs text-neutral-600">{coin.action}</span>
          </div>
          <div className="flex flex-col ml-10 md:ml-14 lg:ml-10 items-end text-xs">
            <span className={`font-semibold ${coin.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {coin.amount}
            </span>
            <span className="text-neutral-600">{coin.time}</span>
          </div>
          <div className="w-[30%] h-8">
            <ResponsiveContainer width="100%" height="100%" >
              <LineChart data={coin.data}>
                <XAxis dataKey="hour" hide />
                <Tooltip cursor={false} />
                {/* <Line
                  type="monotone"
                  dataKey="value"
                  stroke={coin.amount.startsWith('+') ? '#22c55e' : '#f87171'}
                  strokeWidth={2}
                  dot={false}
                /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CoinOverview;
