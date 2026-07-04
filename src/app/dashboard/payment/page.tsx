"use client";

import { useMemo, useState } from "react";
import {
  Wallet,
  Save,
  Printer,
  Download,
 Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PaymentVoucher = {
  id: number;
  ledger: string;
  amount: number;
  mode: string;
  reference: string;
  remarks: string;
};

const ledgerList = [
  "ABC Traders",
  "Sai Suppliers",
  "Cash Account",
  "Bank Account",
];

export default function PaymentPage() {

  const [voucherNo] = useState("PAY-1001");

  const [date, setDate] = useState("");

  const [ledger, setLedger] = useState("");

  const [amount, setAmount] = useState(0);

  const [mode, setMode] = useState("Cash");

  const [reference, setReference] = useState("");

  const [remarks, setRemarks] = useState("");

  const [payments, setPayments] =
    useState<PaymentVoucher[]>([
      {
        id: 1,
        ledger: "ABC Traders",
        amount: 15000,
        mode: "Cash",
        reference: "REF001",
        remarks: "Purchase Payment",
      },
    ]);

  function saveVoucher() {

    if (!ledger || amount <= 0) return;

    setPayments((prev) => [
      ...prev,
      {
        id: Date.now(),
        ledger,
        amount,
        mode,
        reference,
        remarks,
      },
    ]);

    setLedger("");
    setAmount(0);
    setMode("Cash");
    setReference("");
    setRemarks("");
  }

  function deleteVoucher(id: number) {

    setPayments((prev) =>
      prev.filter((x) => x.id !== id)
    );

  }

  const totalPayment = useMemo(() => {

    return payments.reduce(
      (sum, p) => sum + p.amount,
      0
    );

  }, [payments]);

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<Wallet className="h-8 w-8 text-emerald-600"/>

Payment Voucher

</h1>

<p className="mt-2 text-slate-500">

Record supplier and expense payments.

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

<Button
className="bg-emerald-600 hover:bg-emerald-700"
onClick={saveVoucher}
>

<Save className="mr-2 h-4 w-4"/>

Save

</Button>

</div>

</div>

<div className="grid gap-5 md:grid-cols-4">

<Card className="p-5">

<p className="text-sm text-slate-500">

Total Vouchers

</p>

<h2 className="mt-3 text-3xl font-bold">

{payments.length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Total Payment

</p>

<h2 className="mt-3 text-3xl font-bold text-green-600">

₹{totalPayment.toLocaleString()}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Payment Modes

</p>

<h2 className="mt-3 text-3xl font-bold text-blue-600">

4

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Ledgers

</p>

<h2 className="mt-3 text-3xl font-bold text-emerald-600">

{ledgerList.length}

</h2>

</Card>

</div>
        {/* ================= Payment Form ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Payment Details

          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">

                Voucher Number

              </label>

              <Input
                value={voucherNo}
                readOnly
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">

                Voucher Date

              </label>

              <Input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">

                Ledger

              </label>

              <select
                value={ledger}
                onChange={(e) =>
                  setLedger(e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 p-3"
              >

                <option value="">

                  Select Ledger

                </option>

                {ledgerList.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >

                    {item}

                  </option>

                ))}

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">

                Amount

              </label>

              <Input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(Number(e.target.value))
                }
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">

                Payment Mode

              </label>

              <select
                value={mode}
                onChange={(e) =>
                  setMode(e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 p-3"
              >

                <option>Cash</option>

                <option>Bank</option>

                <option>UPI</option>

                <option>Cheque</option>

              </select>

            </div>

          </div>

        </Card>

        {/* ================= Reference ================= */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Additional Information

          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">

                Reference Number

              </label>

              <Input
                value={reference}
                onChange={(e) =>
                  setReference(e.target.value)
                }
                placeholder="Reference Number"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">

                Remarks

              </label>

              <textarea
                rows={6}
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
                placeholder="Enter Remarks..."
                className="w-full rounded-lg border border-slate-300 p-3"
              />

            </div>

            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={saveVoucher}
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Payment

            </Button>

          </div>

        </Card>

      </div>
        {/* ================= Payment History ================= */}

      <Card className="p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Payment History

        </h2>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="border p-3">Voucher</th>

                <th className="border p-3">Ledger</th>

                <th className="border p-3">Mode</th>

                <th className="border p-3">Reference</th>

                <th className="border p-3">Amount</th>

                <th className="border p-3">Remarks</th>

                <th className="border p-3">Action</th>

              </tr>

            </thead>

            <tbody>

              {payments.map((payment) => (

                <tr
                  key={payment.id}
                  className="hover:bg-slate-50"
                >

                  <td className="border p-3">

                    {voucherNo}

                  </td>

                  <td className="border p-3">

                    {payment.ledger}

                  </td>

                  <td className="border p-3">

                    {payment.mode}

                  </td>

                  <td className="border p-3">

                    {payment.reference}

                  </td>

                  <td className="border p-3 font-semibold text-green-600">

                    ₹{payment.amount.toLocaleString()}

                  </td>

                  <td className="border p-3">

                    {payment.remarks}

                  </td>

                  <td className="border p-3">

                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() =>
                        deleteVoucher(payment.id)
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

      {/* ================= Summary ================= */}

      <Card className="p-6">

        <h2 className="mb-5 text-xl font-semibold">

          Payment Summary

        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">

            <span>Total Vouchers</span>

            <span className="font-semibold">

              {payments.length}

            </span>

          </div>

          <div className="flex justify-between">

            <span>Total Payment</span>

            <span className="font-semibold text-green-600">

              ₹{totalPayment.toLocaleString()}

            </span>

          </div>

          <hr />

          <div className="grid gap-3 pt-4">

            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={saveVoucher}
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Voucher

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4"/>

              Print Voucher

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

        </div>

      </Card>

    </div>

  );

}
