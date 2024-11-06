import React from 'react'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { date: '3 Mar', balance1: 200.08, balance2: 10.73 },
  { date: '4 Mar', balance1: 210.00, balance2: 110.00 },
  { date: '5 Mar', balance1: 390.50, balance2: 220.50 },
  { date: '6 Mar', balance1: 400.00, balance2: 230.00 },
  { date: '7 Mar', balance1: 390.00, balance2: 220.00 },
  { date: '8 Mar', balance1: 250.00, balance2: 125.00 },
  { date: '9 Mar', balance1: 398.00, balance2: 230.00 },
  { date: '10 Mar', balance1: 400.00, balance2: 235.00 },
  { date: '11 Mar', balance1: 375.08, balance2: 200.73 },
];

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-lg text-black text-xs">
        <p>{label}</p>
        <p className='text-[#32CD32]'>{`Balance 1: $${payload[0].value}`}</p>
        <p className='text-[#FFA500]'>{`Balance 2: $${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
}

function TotalBalance() {
  return (
    <section className="flex flex-col pt-2.5 w-full lg:w-[60%] md:w-full md:mr-8 lg:mr-0 border-r lg:border-block  border-solid  border-neutral-800 max-md:-mr-0.5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-3.5 py-1.5 font-semibold  max-md:mr-1.5 max-md:max-w-full">
        <div className="flex flex-col px-6 py-5 w-full rounded-3xl border border-2 border-solid bg-neutral-900 border-neutral-800 max-md:pl-5 max-md:max-w-full">
          <div className="flex md:flex-row flex-col gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex gap-3">
              <div className="flex flex-col items-start">
                <div className="text-xs text-neutral-600">Total Balance</div>
                <div className="s mt-4 text-xl text-stone-300">1.82937456</div>
                <div className="mt-3 text-xs text-zinc-600">$20,974.23</div>
              </div>
              <span className="bg-lime-600 text-black mt-7 text-[#fff] px-2 py-1 rounded-2xl h-[30px] text-xs">BTC</span>
            </div>
            <div className="flex  gap-10 md:gap-6 py-1 pr-4 pl-0.5 my-auto whitespace-nowrap rounded-lg border border-solid bg-neutral-900 border-neutral-800">
              <div className="flex gap-3 ">
                <div className="flex flex-col justify-center px-1 py-0.5 text-xs text-lime-300 ">
                  <div className="px-2.5 py-1.5 bg-lime-600 rounded-lg ml-4 md:ml-0 border border-lime-800">Portfolio</div>
                </div>
                <div className="my-auto text-xs text-neutral-400">Funding</div>
              </div>
              <div className="flex gap-10 md:gap-6 my-auto text-xs">
                <div className="text-zinc-500">Assets</div>
                <div className="text-center text-neutral-400">P2P</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end pt-5 pb-17  md:pb-24 pl-10 md:pl-1 mt-9 text-xs min-h-[193px] rounded-[37px_7px_0px_3px] max-md:pl-1 max-md:max-w-full">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" tick={{ fill: '#a3a3a3' }} />
                <YAxis tick={{ fill: '#a3a3a3' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="balance1" stroke="#32CD32"  strokeWidth={2} dot={false}>
                  <LabelList dataKey="balance1" position="right" fill="#32CD32" formatter={(value) => `$${value}`} />
                </Line>
                <Line type="monotone" dataKey="balance2" stroke="#FFA500" strokeWidth={2} dot={false}>
                  <LabelList dataKey="balance2" position="right" fill="#FFA500" formatter={(value) => `$${value}`} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-9 mt-4 text-xs text-center max-md:mr-1">
            {data.map((entry, index) => (
              <div key={index} className="text-xs text-neutral-600">{entry.date}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBalance;
