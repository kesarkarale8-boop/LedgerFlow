import Link from "next/link";
import {
  Building2,
  CirclePlus,
  PackagePlus,
  ReceiptText,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Create Company",
    description: "Set up a new business workspace",
    href: "/companies/new",
    icon: Building2,
    accent: "from-blue-500/20 to-cyan-500/10 text-blue-300 border-blue-500/20",
  },
  {
    title: "Add Ledger",
    description: "Create customer, supplier or expense ledger",
    href: "/ledgers/new",
    icon: CirclePlus,
    accent:
      "from-violet-500/20 to-fuchsia-500/10 text-violet-300 border-violet-500/20",
  },
  {
    title: "Add Stock Item",
    description: "Create a new inventory item",
    href: "/stock-items/new",
    icon: PackagePlus,
    accent:
      "from-emerald-500/20 to-lime-500/10 text-emerald-300 border-emerald-500/20",
  },
  {
    title: "Create Voucher",
    description: "Record sales, purchase, payment or receipt",
    href: "/vouchers/new",
    icon: ReceiptText,
    accent:
      "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/20",
  },
  {
    title: "Manage Customers",
    description: "View and manage party ledgers",
    href: "/customers",
    icon: Users,
    accent:
      "from-sky-500/20 to-indigo-500/10 text-sky-300 border-sky-500/20",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Jump into your most common ERP workflows.
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition hover:border-white/15 hover:bg-slate-900/60"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-gradient-to-br ${action.accent}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-white transition group-hover:text-blue-300">
                  {action.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
