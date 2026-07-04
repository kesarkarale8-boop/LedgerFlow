"use client";

import {
  Bell,
  Search,
  Moon,
  Sun,
  CalendarDays,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}

        <div className="flex items-center gap-5">

          <button className="rounded-xl bg-slate-900 p-3 lg:hidden">

            <Menu size={22} />

          </button>

          <div>

            <h1 className="text-2xl font-bold text-white">

              Dashboard

            </h1>

            <p className="text-sm text-slate-400">

              Welcome back 👋

            </p>

          </div>

        </div>

        {/* Search */}

        <div className="hidden w-[420px] lg:block">

          <div className="flex items-center rounded-2xl border border-slate-800 bg-slate-900 px-4">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search anything..."
              className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800"
          >

            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}

          </button>

          <button className="relative rounded-xl bg-slate-900 p-3 hover:bg-slate-800">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

          </button>

          <div className="hidden items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 lg:flex">

            <CalendarDays size={20} />

            <div>

              <p className="text-xs text-slate-400">

                Today

              </p>

              <p className="text-sm font-semibold">

                30 June 2026

              </p>

            </div>

          </div>
                    {/* User */}

          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 hover:bg-slate-800 transition">

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white">

                K

              </div>

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-green-500" />

            </div>

            <div className="hidden lg:block">

              <h3 className="font-semibold text-white">

                Kesar Karale

              </h3>

              <p className="text-xs text-slate-400">

                Administrator

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>

  );

}
