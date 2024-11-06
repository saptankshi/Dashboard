import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function TransactionItem({ name, symbol, marketCap, change, data }) {
  const isPositive = change.startsWith('+');

  return (
    <div className="flex justify-between items-center p-4 border-b border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-sm text-neutral-400">{name}</span>
          <span className="text-xs text-neutral-600">{symbol}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-10">
        <div className="flex flex-col text-right">
          <span className="text-xs text-neutral-600">Market Cap</span>
          <span className="text-xs text-neutral-400">{marketCap}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs text-neutral-600">30h change</span>
          <span className={`text-xs mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>

        <div className="w-20 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="hour" hide />
              <Tooltip cursor={false} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isPositive ? '#22c55e' : '#f87171'} 
                dot={false} 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex md:block hidden gap-2">
        <button className="px-4 py-2 text-xs font-semibold md:mr-3  text-neutral-400 border border-neutral-700 rounded-xl bg-black">
          Sell
        </button>
        <button className="px-4 py-2 text-xs font-semibold text-white bg-green-500 rounded-xl">
          Buy
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
