 "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Boxes,
  Users,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!email || !password) {
      toast.error(
        "Please fill all fields."
      );
      return;
    }

    setLoading(true);

    try {
      const result = await signIn(
        "credentials",
        {
          email,
          password,
          redirect: false,
        }
      );

      if (result?.error) {
        toast.error(
          "Invalid Email or Password"
        );

        setLoading(false);
        return;
      }

      toast.success(
        "Login Successful 🎉"
      );

      router.push("/dashboard");

      router.refresh();
    } catch (error) {
      toast.error(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center p-6">

      <div className="w-full max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-2xl lg:grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-14 text-white">

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">

                <ShieldCheck size={34} />

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  LedgerFlow ERP
                </h1>

                <p className="text-blue-100 text-lg">
                  Professional Business Suite
                </p>

              </div>

            </div>

            <h2 className="mt-16 text-6xl font-bold leading-tight">
              Smart Accounting
              <br />
              Made Simple.
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-9 text-blue-100">
              Manage Accounting, Inventory,
              Sales, Customers, GST,
              Expenses and Reports from one
              modern dashboard.
            </p>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur">

              <BarChart3 size={30} />

              <div>

                <h3 className="font-semibold text-lg">
                  Real-Time Analytics
                </h3>

                <p className="text-blue-100">
                  Live business reports.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur">

              <Boxes size={30} />

              <div>

                <h3 className="font-semibold text-lg">
                  Inventory Management
                </h3>

                <p className="text-blue-100">
                  Track products instantly.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur">

              <Users size={30} />

              <div>

                <h3 className="font-semibold text-lg">
                  Customer Management
                </h3>

                <p className="text-blue-100">
                  Manage clients professionally.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center bg-slate-50 p-12">

          <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-4xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="mt-3 text-slate-500">
              Login to continue to
              LedgerFlow ERP
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-10 space-y-6"
            >
                            {/* Email */}
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-12 text-base outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-4 text-slate-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-600">

                  <input type="checkbox" />

                  Remember me

                </label>

                <Link
                  href="/forgot-password"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Logging In..."
                ) : (
                  <>
                    Login
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

            </form>

            <div className="my-8 flex items-center gap-4">

              <div className="h-px flex-1 bg-slate-300" />

              <span className="text-sm text-slate-500">
                OR
              </span>

              <div className="h-px flex-1 bg-slate-300" />

            </div>

            <button className="mb-4 h-14 w-full rounded-xl border border-slate-300 font-semibold transition hover:bg-slate-100">
              Continue with Google
            </button>

            <button className="h-14 w-full rounded-xl border border-slate-300 font-semibold transition hover:bg-slate-100">
              Continue with GitHub
            </button>

            <p className="mt-8 text-center text-slate-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
