"use client";

const progressData = [
  { label: "Sales Target", value: "₹8,00,000", progress: 68, color: "bg-blue-500" },
  { label: "Receivables Collected", value: "₹2,45,000", progress: 54, color: "bg-violet-500" },
  { label: "Inventory Health", value: "82%", progress: 82, color: "bg-emerald-500" },
];

export default function BusinessOverview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Business Overview
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Quick summary of financial and operational performance.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {progressData.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">{item.label}</p>
              <span className="text-sm font-semibold text-white">{item.value}</span>
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-slate-800">
              <div
                className={`h-2 rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {item.progress}% completed this month
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
