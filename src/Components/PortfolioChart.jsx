import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function PortfolioChart() {
  // Sample data for Bitcoin LineChart
  const bitcoinData = [
    { name: 'Oct', price: 50000 },
    { name: 'Nov', price: 52000 },
    { name: 'Dec', price: 53000 },
    { name: 'Jan', price: 54000 },
    { name: 'Feb', price: 52291 },
  ];

  // Sample data for ROI BarChart
  const roiData = [
    { month: 'Jan', roi: 5 },
    { month: 'Feb', roi: 7 },
    { month: 'Mar', roi: 15 },
    { month: 'Apr', roi: 10 },
    { month: 'May', roi: 8 },
    { month: 'Jun', roi: 9 },
  ];

  return (
    <section className="flex flex-col my-6 md:my-0 lg:ml-7 p-3 w-full md:w-[47%] lg:w-[30%] mt-1 font-semibold bg-black bg-opacity-0">
      {/* Bitcoin Section */}
      <div className="flex flex-col justify-center  px-0.5 py-1 bg-black bg-opacity-0">
        <div className="flex flex-col px-4 py-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="/assets/bit.png"
              alt="Bitcoin icon"
              className="w-6 h-6 object-contain"
            />
            <div>
              <div className="text-xs text-zinc-400">Bitcoin</div>
              <div className="text-xs text-zinc-600 mt-1">BTC</div>
            </div>
          </div>
          <div className="flex justify-between items-start mt-6">
            <div>
              <div className="text-sm text-zinc-400">$52,291</div>
              <div className="text-xs text-green-600 mt-1">+0.25%</div>
            </div>
            <div className="w-28 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bitcoinData}>
                  <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="flex flex-col justify-center mt-4 bg-black bg-opacity-0">
        <div className="flex flex-col px-4 py-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-stone-300">$1029</span>
                <span className="text-xl text-neutral-600">.37</span>
              </div>
              <div className="text-xs text-neutral-700 mt-1">Oct 2023 - Feb 2024</div>
            </div>
            <div className="text-xs text-zinc-600">
              <span>Return On Investment</span>
            </div>
          </div>
          <div className="w-full  solid border-[#fff] h-40 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roiData} barCategoryGap="30%" barSize={10}>
                <XAxis dataKey="month" stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="roi" fill="#22c55e" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioChart;
