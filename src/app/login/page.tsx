"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck, BarChart3, WalletCards } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (key: "email" | "password", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Please enter email and password");
    return;
  }

  try {
    setIsLoading(true);

    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    console.log("SIGNIN RESPONSE =>", res);

    if (res?.error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful");

    window.location.href = "/dashboard";
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Branding Section */}
        <section className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 xl:p-14">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-900/40">
                  <WalletCards className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">
                    LedgerFlow
                  </p>
                  <p className="text-xs text-slate-400">
                    Smart ERP for billing, accounts & inventory
                  </p>
                </div>
              </div>

              <div className="mt-16 max-w-xl">
                <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                  Run your business finance, stock and sales in one clean workspace.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-300 xl:text-lg">
                  Manage ledgers, vouchers, inventory, GST-ready billing and business reports with a modern ERP dashboard built for growing teams.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-300">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Realtime business overview</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Track sales, outstanding balances, purchase trends and stock movement from one dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Secure account access</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Protected login flow with role-ready structure and scalable ERP foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Login Section */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-900/40">
                <WalletCards className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">LedgerFlow</h2>
                <p className="text-sm text-slate-400">Business ERP Workspace</p>
              </div>
            </div>

            <Card className="border border-slate-800 bg-slate-900/80 text-white shadow-2xl shadow-black/20 backdrop-blur">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-3xl font-bold tracking-tight">
                  Sign in
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Access your LedgerFlow dashboard and continue managing your business operations.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      className="h-11 border-slate-800 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-slate-200">
                        Password
                      </Label>
                    </div>

                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => onChange("password", e.target.value)}
                      className="h-11 border-slate-800 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full bg-blue-600 text-white hover:bg-blue-500"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign in to dashboard"
                    )}
                  </Button>

                  <p className="text-center text-sm text-slate-400">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="font-medium text-blue-400 transition hover:text-blue-300 hover:underline"
                    >
                      Create account
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
