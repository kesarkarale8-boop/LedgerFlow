 "use client";

import { useTheme } from "next-themes";
import {
  Bell,
  Building2,
  CheckCircle2,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const notifications = [
  {
    id: 1,
    title: "Purchase Order Created",
    time: "2 min ago",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "New Customer Added",
    time: "15 min ago",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Invoice Paid Successfully",
    time: "1 hour ago",
    icon: CheckCircle2,
  },
];

export default function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div className="space-y-2">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            <Building2 className="h-3.5 w-3.5" />
            LedgerFlow Workspace
          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back, Kesar 👋
            </h1>

            <p className="mt-1 text-sm text-slate-300">
              Here's what's happening across your accounts,
              inventory and billing today.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          {/* SEARCH */}

          <div className="relative w-full sm:w-80">

            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <Input
              placeholder="Search ledgers, vouchers, stock..."
              className="h-11 border-white/10 bg-slate-900/70 pl-10 text-white placeholder:text-slate-500"
            />

          </div>

          {/* NOTIFICATION */}

          <DropdownMenu>

            <DropdownMenuTrigger asChild>

              <Button
                variant="outline"
                size="icon"
                className="relative h-11 w-11 border-white/10 bg-slate-900/60 text-white hover:bg-slate-800"
              >

                <Bell className="h-5 w-5" />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

              </Button>

            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-80"
            >

              <DropdownMenuLabel>
                Notifications
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {notifications.map((item) => {

                const Icon = item.icon;

                return (

                  <DropdownMenuItem
                    key={item.id}
                    className="py-3"
                  >

                    <Icon className="mr-3 h-4 w-4 text-blue-600" />

                    <div>

                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {item.time}
                      </p>

                    </div>

                  </DropdownMenuItem>

                );
              })}

            </DropdownMenuContent>

          </DropdownMenu>

          {/* THEME */}

          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="h-11 w-11 border-white/10 bg-slate-900/60 text-white hover:bg-slate-800"
          >

            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}

          </Button>

          {/* PROFILE */}

          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-white/10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
          >
            <User className="h-5 w-5" />
          </Button>

        </div>

      </div>

    </header>
  );
}
