"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  BookOpen,
  Users,
  UserCheck,
  Boxes,
  Receipt,
  ShoppingCart,
  Wallet,
  FileText,
  BarChart3,
  Settings,
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
    title: "Ledger",
    href: "/dashboard/ledger",
    icon: BookOpen,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/dashboard/suppliers",
    icon: UserCheck,
  },
  {
    title: "Stock Items",
    href: "/dashboard/stock-items",
    icon: Boxes,
  },
  {
    title: "Sales",
    href: "/dashboard/sales",
    icon: Receipt,
  },
  {
    title: "Purchase",
    href: "/dashboard/purchase",
    icon: ShoppingCart,
  },
  {
    title: "Payment",
    href: "/dashboard/payment",
    icon: Wallet,
  },
  {
    title: "Receipts",
    href: "/dashboard/receipts",
    icon: FileText,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
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
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-800 bg-slate-950 text-white">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">

          LedgerFlow

        </h1>

        <p className="mt-1 text-sm text-slate-400">

          Smart ERP System

        </p>

      </div>

      {/* Menu */}

      <nav className="mt-5 px-4">

        <div className="space-y-2">
                    {menus.map((menu) => {

            const Icon = menu.icon;

            const active = pathname === menu.href;

            return (

              <Link
                key={menu.title}
                href={menu.href}
                className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >

                <div className="flex items-center gap-4">

                  <Icon size={22} />

                  <span className="font-medium">

                    {menu.title}

                  </span>

                </div>

              </Link>

            );

          })}

        </div>

      </nav>

      {/* Bottom User Card */}

      <div className="absolute bottom-0 left-0 w-full border-t border-slate-800 p-5">

        <div className="rounded-2xl bg-slate-900 p-4">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-lg font-bold">

              K

            </div>

            <div>

              <h3 className="font-semibold">

                Kesar Karale

              </h3>

              <p className="text-sm text-slate-400">

                Administrator

              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>

  );

}
