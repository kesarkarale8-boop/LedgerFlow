"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div
      className="
        flex h-screen overflow-hidden
        bg-slate-50 text-slate-900
        transition-colors duration-300
        dark:bg-slate-950 dark:text-white
      "
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Navbar */}
        <header
          className="
            sticky top-0 z-40
            border-b border-slate-200
            bg-white/80 backdrop-blur-xl
            transition-colors duration-300

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          <Navbar />
        </header>

        {/* Content */}
        <main
          className="
            flex-1 overflow-y-auto
            bg-slate-100
            transition-colors duration-300

            dark:bg-slate-900
          "
        >
          <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}
