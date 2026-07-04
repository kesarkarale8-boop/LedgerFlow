 "use client";

import Link from "next/link";
import AppLayout from "@/components/app-layout";

import {
  Building2,
  Users,
  UserCheck,
  Boxes,
  Receipt,
  ShoppingCart,
  Wallet,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Package,
  CreditCard,
  BarChart3,
  Activity,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Today's Sales",
    value: "₹25,640",
    change: "+12.4%",
    icon: IndianRupee,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Today's Purchase",
    value: "₹12,450",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Customers",
    value: "245",
    change: "+15",
    icon: Users,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Products",
    value: "325",
    change: "+32",
    icon: Package,
    color: "from-orange-500 to-red-500",
  },
];

const modules = [
  {
    title: "Company",
    href: "/company",
    icon: Building2,
  },
  {
    title: "Ledger",
    href: "/ledger",
    icon: Wallet,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: UserCheck,
  },
  {
    title: "Stock",
    href: "/stock-items",
    icon: Boxes,
  },
  {
    title: "Sales",
    href: "/sales",
    icon: Receipt,
  },
  {
    title: "Purchase",
    href: "/purchase",
    icon: ShoppingCart,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: CreditCard,
  },
];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-8">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-white shadow-2xl">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">

                <Sparkles className="h-4 w-4" />

                Smart ERP Dashboard

              </div>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight">

                Welcome Back, Kesar 👋

              </h1>

              <p className="mt-5 max-w-2xl text-lg text-blue-100">

                Manage Company, Inventory, Ledger,
                Customers, Suppliers, Purchase,
                Sales, Payments and GST from one
                beautiful enterprise dashboard.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105 hover:bg-blue-50">

                  + Create Invoice

                </button>

                <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 backdrop-blur transition hover:bg-white/20">

                  View Reports

                </button>

              </div>

            </div>

            <div className="grid gap-5">

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center gap-4">

                  <CalendarDays className="h-10 w-10 text-cyan-200" />

                  <div>

                    <p className="text-sm text-blue-100">

                      Today's Date

                    </p>

                    <h2 className="text-2xl font-bold">

                      04 July 2026

                    </h2>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center gap-4">

                  <Bell className="h-10 w-10 text-yellow-300" />

                  <div>

                    <p className="text-sm text-blue-100">

                      Notifications

                    </p>

                    <h2 className="text-2xl font-bold">

                      5 Pending Tasks

                    </h2>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center gap-4">

                  <Activity className="h-10 w-10 text-green-300" />

                  <div>

                    <p className="text-sm text-blue-100">

                      Server Status

                    </p>

                    <h2 className="font-bold text-green-300">

                      Running Smoothly

                    </h2>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
               {/* ================= KPI Cards ================= */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">

                      {item.title}

                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">

                      {item.value}

                    </h2>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">

                      <TrendingUp className="h-4 w-4" />

                      {item.change}

                    </div>

                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg transition duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* ================= Quick Modules ================= */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                Quick Access

              </h2>

              <p className="mt-1 text-sm text-slate-500">

                Open any ERP module instantly

              </p>

            </div>

            <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">

              {modules.length} Modules

            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {modules.map((item) => {

              const Icon = item.icon;

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                      <Icon className="h-7 w-7" />

                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">

                    {item.title}

                  </h3>

                  <p className="mt-2 text-sm text-slate-500">

                    Open {item.title} Module

                  </p>

                </Link>

              );

            })}

          </div>

        </div>
             {/* ================= Analytics ================= */}

      <div className="grid gap-6 xl:grid-cols-3">

        {/* Sales Analytics */}

        <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                Sales Analytics

              </h2>

              <p className="mt-1 text-sm text-slate-500">

                Monthly Sales Performance

              </p>

            </div>

            <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">

              This Month

            </button>

          </div>

          <div className="mt-10 flex h-80 items-end justify-between gap-4">

            {[45,70,55,90,60,120,80,100,75,140,110,165].map((height,index)=>(

              <div
                key={index}
                className="flex flex-1 flex-col items-center"
              >

                <div
                  style={{height:`${height}px`}}
                  className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 via-cyan-500 to-sky-300 transition-all duration-300 hover:scale-105"
                />

                <span className="mt-3 text-xs text-slate-500">

                  {
                    [
                      "Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep","Oct","Nov","Dec"
                    ][index]
                  }

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Business Summary */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

            Business Summary

          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-600 dark:text-slate-400">

                Total Sales

              </span>

              <span className="font-bold text-green-600">

                ₹4,25,650

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600 dark:text-slate-400">

                Total Purchase

              </span>

              <span className="font-bold text-blue-600">

                ₹2,18,450

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600 dark:text-slate-400">

                Total Expense

              </span>

              <span className="font-bold text-red-600">

                ₹54,000

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600 dark:text-slate-400">

                Net Profit

              </span>

              <span className="font-bold text-emerald-600">

                ₹1,53,200

              </span>

            </div>

            <hr className="dark:border-slate-700" />

            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">

              <p className="text-sm">

                Growth

              </p>

              <h2 className="mt-2 text-4xl font-bold">

                +18.6%

              </h2>

              <p className="mt-2 text-sm text-green-100">

                Compared to last month

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Revenue Overview ================= */}

      <div className="grid gap-6 lg:grid-cols-4">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-xl">

          <p className="text-blue-100">

            Revenue

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            ₹12.8L

          </h2>

          <p className="mt-2 text-sm text-blue-100">

            This Financial Year

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white shadow-xl">

          <p className="text-green-100">

            Collection

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            ₹8.4L

          </h2>

          <p className="mt-2 text-sm">

            Received Payments

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-xl">

          <p className="text-orange-100">

            Pending

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            ₹2.1L

          </h2>

          <p className="mt-2 text-sm">

            Outstanding Amount

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-700 p-6 text-white shadow-xl">

          <p className="text-violet-100">

            Orders

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            548

          </h2>

          <p className="mt-2 text-sm">

            Completed Orders

          </p>

        </div>

      </div>
             {/* ================= Inventory & Payments ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Inventory Overview */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Inventory Overview

            </h2>

            <Boxes className="h-8 w-8 text-blue-600" />

          </div>

          <div className="space-y-4">

            {[
              {
                title: "Total Products",
                value: "325",
                color: "text-blue-600",
              },
              {
                title: "Available Stock",
                value: "307",
                color: "text-green-600",
              },
              {
                title: "Low Stock",
                value: "14",
                color: "text-orange-500",
              },
              {
                title: "Out Of Stock",
                value: "4",
                color: "text-red-600",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700"
              >

                <span className="font-medium text-slate-700 dark:text-slate-200">

                  {item.title}

                </span>

                <span className={`text-xl font-bold ${item.color}`}>

                  {item.value}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Outstanding Payments */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Outstanding Payments

            </h2>

            <Wallet className="h-8 w-8 text-green-600" />

          </div>

          <div className="space-y-4">

            {[
              {
                name: "ABC Traders",
                amount: "₹45,000",
              },
              {
                name: "Sai Suppliers",
                amount: "₹18,500",
              },
              {
                name: "Om Enterprises",
                amount: "₹9,850",
              },
              {
                name: "Royal Agencies",
                amount: "₹32,600",
              },
            ].map((item) => (

              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:shadow-md dark:border-slate-700"
              >

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">

                    {item.name}

                  </h3>

                  <p className="text-sm text-slate-500">

                    Pending Payment

                  </p>

                </div>

                <span className="text-lg font-bold text-red-600">

                  {item.amount}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ================= Recent Activity ================= */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">

            Recent Activity

          </h2>

          <div className="space-y-6">

            {[
              "New Sales Invoice Created",
              "Purchase Entry Saved",
              "Customer Added Successfully",
              "Supplier Payment Completed",
              "Stock Updated",
              "GST Report Generated",
            ].map((activity, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">

                  <Activity className="h-5 w-5 text-blue-600" />

                </div>

                <div>

                  <p className="font-medium text-slate-900 dark:text-white">

                    {activity}

                  </p>

                  <p className="text-sm text-slate-500">

                    Today • {index + 1} hour ago

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Low Stock Alerts */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">

            Low Stock Alerts

          </h2>

          <div className="space-y-4">

            {[
              ["HP Ink", "3 Qty"],
              ["Printer Paper", "5 Qty"],
              ["Mouse", "2 Qty"],
              ["Keyboard", "1 Qty"],
              ["USB Cable", "4 Qty"],
            ].map((item) => (

              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl bg-red-50 p-5 dark:bg-red-900/20"
              >

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">

                    {item[0]}

                  </h3>

                  <p className="text-sm text-red-600">

                    Reorder Required

                  </p>

                </div>

                <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">

                  {item[1]}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
             {/* ================= Latest Invoices ================= */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Latest Invoices

            </h2>

            <Receipt className="h-7 w-7 text-blue-600" />

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead>

                <tr className="border-b dark:border-slate-700">

                  <th className="p-3 text-left">Invoice</th>

                  <th className="p-3 text-left">Customer</th>

                  <th className="p-3 text-left">Amount</th>

                  <th className="p-3 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["INV-1001", "ABC Traders", "₹15,000", "Paid"],
                  ["INV-1002", "Sai Electricals", "₹22,500", "Pending"],
                  ["INV-1003", "XYZ Mart", "₹8,950", "Paid"],
                  ["INV-1004", "Ganesh Store", "₹13,400", "Pending"],
                  ["INV-1005", "Om Enterprises", "₹18,250", "Paid"],
                ].map((row) => (

                  <tr
                    key={row[0]}
                    className="border-b hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >

                    <td className="p-3 font-semibold">{row[0]}</td>

                    <td className="p-3">{row[1]}</td>

                    <td className="p-3 font-bold text-green-600">

                      {row[2]}

                    </td>

                    <td className="p-3">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          row[3] === "Paid"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        }`}
                      >
                        {row[3]}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Financial Summary */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">

            Financial Summary

          </h2>

          <div className="space-y-5">

            {[
              ["Bank Balance", "₹8,45,600", "text-blue-600"],
              ["Cash In Hand", "₹1,25,400", "text-green-600"],
              ["Receivable", "₹2,18,500", "text-orange-600"],
              ["Payable", "₹98,700", "text-red-600"],
              ["GST Payable", "₹52,000", "text-violet-600"],
            ].map(([label, value, color]) => (

              <div
                key={label}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
              >

                <span className="text-slate-600 dark:text-slate-300">

                  {label}

                </span>

                <span className={`font-bold ${color}`}>

                  {value}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ================= ERP Footer ================= */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-10 text-white shadow-2xl">

        <div className="grid gap-8 md:grid-cols-4">

          <div>

            <p className="text-blue-100">

              Revenue

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              ₹12.8L

            </h2>

          </div>

          <div>

            <p className="text-blue-100">

              Customers

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              245

            </h2>

          </div>

          <div>

            <p className="text-blue-100">

              Products

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              325

            </h2>

          </div>

          <div>

            <p className="text-blue-100">

              Net Profit

            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-300">

              ₹1.53L

            </h2>

          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-8 md:flex-row">

          <div>

            <h3 className="text-2xl font-bold">

              LedgerFlow ERP

            </h3>

            <p className="mt-2 text-blue-100">

              Complete Business Management Software

            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link href="/sales">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">

                Sales

              </button>

            </Link>

            <Link href="/purchase">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">

                Purchase

              </button>

            </Link>

            <Link href="/payment">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">

                Payment

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>

  </AppLayout>

);

}
