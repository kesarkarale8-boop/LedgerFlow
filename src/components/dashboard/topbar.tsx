"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">LedgerFlow</h1>
        <p className="text-sm text-slate-500">
          Manage accounts, vouchers and inventory
        </p>
      </div>

      <Button
        variant="outline"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        <LogOut className="mr-2 size-4" />
        Logout
      </Button>
    </header>
  );
}
