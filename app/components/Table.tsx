import { FiArrowUpRight, FiRefreshCw, FiChevronRight } from "react-icons/fi";

const currencies = [
  {
    code: "NGN",
    name: "Nigerian Naira",
    rate: "1 SAR ≈ 412.5 NGN",
    change: "+1.24",
  },
  {
    code: "KES",
    name: "Kenyan Shillings",
    rate: "1 SAR ≈ 412.5 KES",
    change: "+1.24",
  },
  {
    code: "KES",
    name: "Kenyan Shillings",
    rate: "1 SAR ≈ 412.5 KES",
    change: "+1.24",
  },
  {
    code: "KES",
    name: "Kenyan Shillings",
    rate: "1 SAR ≈ 412.5 KES",
    change: "+1.24",
  },
  {
    code: "KES",
    name: "Kenyan Shillings",
    rate: "1 SAR ≈ 412.5 KES",
    change: "+1.24",
  },
];

export default function MarketTable() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-montserrat)]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Market Overview */}
          <div className="rounded-2xl border border-gray-100 p-6 lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Market Overview
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Over 50+ exchange rates vs African currencies
                </p>
              </div>
              <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600">
                <FiRefreshCw className="h-3.5 w-3.5" />
                Live update
              </button>
            </div>

            {/* Table header */}
            <div className="mt-6 hidden grid-cols-[1.5fr_1.5fr_1.5fr_1fr] gap-4 px-2 text-xs font-medium text-gray-400 sm:grid">
              <span>Currency Pair</span>
              <span>Currency Rate</span>
              <span>24h Trend</span>
              <span className="text-right">Action</span>
            </div>

            {/* Rows */}
            <div className="mt-2 flex flex-col divide-y divide-gray-100">
              {currencies.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-3 px-2 py-4 sm:grid-cols-[1.5fr_1.5fr_1.5fr_1fr] sm:items-center sm:gap-4"
                >
                  {/* Currency pair */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                      {item.code.slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        SAR/{item.code}
                      </p>
                      <p className="text-xs text-gray-400">{item.name}</p>
                    </div>
                  </div>

                  {/* Currency rate */}
                  <p className="text-sm font-medium text-gray-900">
                    {item.rate}
                  </p>

                  {/* 24h trend */}
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-full max-w-[120px] rounded-full bg-emerald-100">
                      <div className="h-2 w-3/4 rounded-full bg-emerald-300" />
                    </div>
                    <span className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-emerald-500">
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                      {item.change}
                    </span>
                  </div>

                  {/* Action */}
                  <button className="flex items-center justify-end gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:justify-end">
                    Send Now
                    <FiChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Convert */}
          <div className="flex flex-col rounded-2xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Convert
            </h2>

            {/* You send */}
            <div className="mt-6">
              <label className="text-xs text-gray-400">You send</label>
              <div className="mt-2 flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-2xl font-semibold text-gray-900">
                  1000
                </span>
                <span className="text-sm font-medium text-gray-500">
                  SAR 🇸🇦
                </span>
              </div>
            </div>

            {/* Swap icon */}
            <div className="flex justify-center py-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700">
                <FiRefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Recipient gets */}
            <div>
              <label className="text-xs text-gray-400">Recipient gets</label>
              <div className="mt-2 flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-2xl font-semibold text-gray-900">
                  412500
                </span>
                <span className="text-sm font-medium text-gray-500">
                  NGN 🇳🇬
                </span>
              </div>
            </div>

            {/* Summary rows */}
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Exchange Rate</span>
                <span className="font-medium text-gray-900">
                  1 SAR = 412.5 NGN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Transfer Fee</span>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Amount Fee</span>
                <span className="font-medium text-gray-900">Refunded</span>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full rounded-xl bg-blue-700 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Bottom blue bar accent */}
      <div className="h-2 w-full bg-blue-700" />
    </section>
  );
}