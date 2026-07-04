import Link from "next/link";
import { ReactNode } from "react";
import { BarChart3, ShieldCheck, Sparkles, WalletCards } from "lucide-react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  form: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
};

const features = [
  {
    icon: WalletCards,
    title: "Accounting & Ledger",
    description: "Manage vouchers, ledgers, GST and transactions in one place.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description: "Track revenue, receivables, stock and cash flow with clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description: "Role-ready structure with safe auth flows and reliable data handling.",
  },
];

export default function AuthShell({
  title,
  subtitle,
  form,
  footerText,
  footerLinkText,
  footerHref,
}: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Floating blobs */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-900/30">
              <WalletCards className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">LedgerFlow</p>
              <p className="text-xs text-slate-400">Smart ERP for modern businesses</p>
            </div>
          </Link>

          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 backdrop-blur md:block">
            GST • Inventory • Accounting • Billing
          </div>
        </div>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div className="hidden lg:block">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Built for growing businesses
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight">
                Run accounts, inventory and billing from one clean workspace.
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                LedgerFlow helps teams manage vouchers, stock, customers, suppliers and
                financial workflows with a modern ERP experience.
              </p>

              <div className="mt-10 grid gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
              <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{subtitle}</p>
                </div>

                {form}

                <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-400">
                  {footerText}{" "}
                  <Link
                    href={footerHref}
                    className="font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    {footerLinkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} LedgerFlow. Built for secure finance operations.
        </div>
      </div>
    </div>
  );
}
