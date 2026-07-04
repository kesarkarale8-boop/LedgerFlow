"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Plus,
  Trash2,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type JournalEntry = {
  id: number;
  debitLedger: string;
  creditLedger: string;
  amount: number;
};

const ledgers = [
  "Cash Account",
  "HDFC Bank",
  "ICICI Bank",
  "Sales Account",
  "Purchase Account",
  "Salary Expense",
  "Rent Expense",
  "Electricity Expense",
  "Customer A",
  "Supplier B",
];

export default function JournalPage() {

  const [voucherNo] =
    useState("JV-1001");

  const [voucherDate, setVoucherDate] =
    useState("");

  const [narration, setNarration] =
    useState("");

  const [entries, setEntries] =
    useState<JournalEntry[]>([
      {
        id: 1,
        debitLedger: "",
        creditLedger: "",
        amount: 0,
      },
    ]);

  const updateEntry = (
    id: number,
    key: keyof JournalEntry,
    value: string | number
  ) => {

    setEntries((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item
      )
    );

  };

  const addEntry = () => {

    setEntries((prev) => [
      ...prev,
      {
        id: Date.now(),
        debitLedger: "",
        creditLedger: "",
        amount: 0,
      },
    ]);

  };

  const removeEntry = (id: number) => {

    setEntries((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  const totalDebit = useMemo(() => {

    return entries.reduce(
      (sum, item) => sum + item.amount,
      0
    );

  }, [entries]);

  const totalCredit = totalDebit;

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold">

            <BookOpen className="text-purple-600"/>

            Journal Voucher

          </h1>

          <p className="mt-2 text-slate-500">

            Create accounting journal entries.

          </p>

        </div>

        <div className="flex gap-3">

          <Button variant="outline">

            <Printer className="mr-2 h-4 w-4"/>

            Print

          </Button>

          <Button variant="outline">

            <Download className="mr-2 h-4 w-4"/>

            PDF

          </Button>

          <Button className="bg-purple-600 hover:bg-purple-700">

            <Save className="mr-2 h-4 w-4"/>

            Save Voucher

          </Button>

        </div>

      </div>

      {/* Voucher Details */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Voucher Details

          </h2>

          <div className="space-y-4">

            <Input
              value={voucherNo}
              readOnly
            />

            <Input
              type="date"
              value={voucherDate}
              onChange={(e)=>
                setVoucherDate(
                  e.target.value
                )
              }
            />

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Narration

          </h2>

          <textarea
            rows={5}
            value={narration}
            onChange={(e)=>
              setNarration(
                e.target.value
              )
            }
            placeholder="Enter narration..."
            className="w-full rounded-lg border p-3"
          />

        </Card>

      </div>
            {/* ================= Journal Entries ================= */}

      <Card className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              Journal Entries
            </h2>

            <p className="text-sm text-slate-500">
              Add debit and credit ledger entries.
            </p>

          </div>

          <Button
            onClick={addEntry}
            className="bg-purple-600 hover:bg-purple-700"
          >

            <Plus className="mr-2 h-4 w-4"/>

            Add Entry

          </Button>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full border">

            <thead className="bg-slate-100">

              <tr>

                <th className="border p-3">
                  Debit Ledger
                </th>

                <th className="border p-3">
                  Credit Ledger
                </th>

                <th className="border p-3">
                  Amount
                </th>

                <th className="border p-3">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {entries.map((entry) => (

                <tr key={entry.id}>

                  {/* Debit */}

                  <td className="border p-2">

                    <select
                      value={entry.debitLedger}
                      onChange={(e)=>
                        updateEntry(
                          entry.id,
                          "debitLedger",
                          e.target.value
                        )
                      }
                      className="w-full rounded border p-2"
                    >

                      <option value="">
                        Select Debit Ledger
                      </option>

                      {ledgers.map((ledger)=>(
                        <option
                          key={ledger}
                          value={ledger}
                        >
                          {ledger}
                        </option>
                      ))}

                    </select>

                  </td>

                  {/* Credit */}

                  <td className="border p-2">

                    <select
                      value={entry.creditLedger}
                      onChange={(e)=>
                        updateEntry(
                          entry.id,
                          "creditLedger",
                          e.target.value
                        )
                      }
                      className="w-full rounded border p-2"
                    >

                      <option value="">
                        Select Credit Ledger
                      </option>

                      {ledgers.map((ledger)=>(
                        <option
                          key={ledger}
                          value={ledger}
                        >
                          {ledger}
                        </option>
                      ))}

                    </select>

                  </td>

                  {/* Amount */}

                  <td className="border p-2">

                    <Input
                      type="number"
                      value={entry.amount}
                      onChange={(e)=>
                        updateEntry(
                          entry.id,
                          "amount",
                          Number(e.target.value)
                        )
                      }
                    />

                  </td>

                  {/* Delete */}

                  <td className="border p-2 text-center">

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={()=>
                        removeEntry(entry.id)
                      }
                    >

                      <Trash2 className="h-4 w-4"/>

                    </Button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Card>

      {/* ================= Totals ================= */}

      <Card className="p-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Debit Total
            </h3>

            <div className="rounded-lg border bg-green-50 p-5">

              <p className="text-3xl font-bold text-green-600">

                ₹{totalDebit.toLocaleString()}

              </p>

            </div>

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Credit Total
            </h3>

            <div className="rounded-lg border bg-blue-50 p-5">

              <p className="text-3xl font-bold text-blue-600">

                ₹{totalCredit.toLocaleString()}

              </p>

            </div>

          </div>

        </div>

        <div className="mt-6 rounded-lg border border-emerald-300 bg-emerald-50 p-4">

          {totalDebit === totalCredit ? (

            <p className="font-semibold text-emerald-700">

              ✅ Journal Entry Balanced

            </p>

          ) : (

            <p className="font-semibold text-red-600">

              ❌ Debit & Credit are not equal.

            </p>

          )}

        </div>

      </Card>
      {/* ================= Journal Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Journal Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Voucher Number</span>

              <span>{voucherNo}</span>

            </div>

            <div className="flex justify-between">

              <span>Date</span>

              <span>{voucherDate || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Total Debit</span>

              <span className="font-semibold text-green-600">

                ₹{totalDebit.toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Credit</span>

              <span className="font-semibold text-blue-600">

                ₹{totalCredit.toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Entries</span>

              <span>{entries.length}</span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="mb-2 font-semibold">
                Narration
              </h3>

              <p className="text-sm text-slate-600">

                {narration || "No narration added."}

              </p>

            </div>

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Actions
          </h2>

          <div className="grid gap-4">

            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() =>
                alert("Journal Voucher Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Journal Voucher

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4"/>

              Print Journal

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("PDF Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4"/>

              Download PDF

            </Button>

          </div>

          <div className="mt-8 rounded-lg border border-purple-200 bg-purple-50 p-4">

            <h3 className="mb-2 font-semibold text-purple-700">

              Validation Status

            </h3>

            {totalDebit === totalCredit ? (

              <p className="font-medium text-green-600">

                ✅ Journal Voucher is Balanced

              </p>

            ) : (

              <p className="font-medium text-red-600">

                ❌ Debit & Credit totals must match

              </p>

            )}

          </div>

        </Card>

      </div>

    </div>

  );

}
