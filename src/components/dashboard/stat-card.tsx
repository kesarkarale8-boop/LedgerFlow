import { LucideIcon, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Accent = "blue" | "violet" | "emerald" | "amber";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  accent?: Accent;
}

const accentMap: Record<Accent, string> = {
  blue: "from-blue-500/20 to-cyan-500/10 text-blue-300 border-blue-500/20",
  violet:
    "from-violet-500/20 to-fuchsia-500/10 text-violet-300 border-violet-500/20",
  emerald:
    "from-emerald-500/20 to-lime-500/10 text-emerald-300 border-emerald-500/20",
  amber:
    "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/20",
};

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  accent = "blue",
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_30%)]" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {value}
          </h3>
          <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            {description}
          </div>
        </div>

        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br",
            accentMap[accent]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
