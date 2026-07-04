"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Building2,
  Users,
  UserSquare2,
  Package,
  Boxes,
  Receipt,
  ShoppingCart,
  Wallet,
  CreditCard,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Company",
    href: "/dashboard/company",
    icon: Building2,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/dashboard/suppliers",
    icon: UserSquare2,
  },
  {
    title: "Inventory",
    href: "/dashboard/inventory",
    icon: Boxes,
  },
  {
    title: "Stock Items",
    href: "/dashboard/stock-items",
    icon: Package,
  },
  {
    title: "Sales",
    href: "/dashboard/sales",
    icon: ShoppingCart,
  },
  {
    title: "Purchase",
    href: "/dashboard/purchase",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: Wallet,
  },
  {
    title: "Receipts",
    href: "/dashboardreceipts",
    icon: CreditCard,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 lg:flex lg:flex-col">
      <div className="border-b border-slate-800 p-8">
        <h1 className="text-3xl font-bold text-blue-500">
          LedgerFlow
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Smart ERP Solution
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <button className="flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 text-white transition hover:bg-red-500">
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}
