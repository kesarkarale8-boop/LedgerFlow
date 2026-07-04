import { Badge } from "@/components/ui/badge";

const vouchers = [
  {
    id: "SAL-00124",
    party: "Shree Traders",
    type: "Sales",
    amount: "₹18,500",
    date: "24 Jun 2026",
    status: "Paid",
  },
  {
    id: "PUR-00081",
    party: "Mahalaxmi Suppliers",
    type: "Purchase",
    amount: "₹42,000",
    date: "23 Jun 2026",
    status: "Pending",
  },
  {
    id: "PAY-00032",
    party: "Office Rent",
    type: "Payment",
    amount: "₹25,000",
    date: "22 Jun 2026",
    status: "Completed",
  },
  {
    id: "REC-00019",
    party: "Apex Retail",
    type: "Receipt",
    amount: "₹12,300",
    date: "22 Jun 2026",
    status: "Received",
  },
];

export default function RecentVouchers() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Recent Vouchers
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Latest accounting entries across your workspace.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-400">
              <th className="pb-2 font-medium">Voucher No.</th>
              <th className="pb-2 font-medium">Party</th>
              <th className="pb-2 font-medium">Type</th>
              <th className="pb-2 font-medium">Date</th>
              <th className="pb-2 font-medium">Amount</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {vouchers.map((voucher) => (
              <tr
                key={voucher.id}
                className="rounded-2xl border border-white/10 bg-slate-900/40"
              >
                <td className="rounded-l-2xl px-4 py-4 font-medium text-white">
                  {voucher.id}
                </td>
                <td className="px-4 py-4 text-slate-300">{voucher.party}</td>
                <td className="px-4 py-4 text-slate-300">{voucher.type}</td>
                <td className="px-4 py-4 text-slate-400">{voucher.date}</td>
                <td className="px-4 py-4 font-semibold text-white">
                  {voucher.amount}
                </td>
                <td className="rounded-r-2xl px-4 py-4">
                  <Badge
                    className={
                      voucher.status === "Paid" || voucher.status === "Completed" || voucher.status === "Received"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/10"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-300 hover:bg-amber-500/10"
                    }
                  >
                    {voucher.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
