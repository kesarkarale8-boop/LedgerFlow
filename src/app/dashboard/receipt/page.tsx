"use client";

import { useMemo, useState } from "react";
import {
  Receipt,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const customers = [
  "ABC Traders",
  "XYZ Enterprises",
  "Sai Electricals",
  "Shree Ganesh Mart",
];

const accounts = [
  "Cash Account",
  "HDFC Bank",
  "ICICI Bank",
  "SBI Bank",
];

export default function ReceiptPage() {

  const [voucherNo] = useState("REC-1001");

  const [date, setDate] = useState("");

  const [customer, setCustomer] = useState("");

  const [account, setAccount] = useState("");

  const [receiptMode, setReceiptMode] =
    useState("Cash");

  const [amount, setAmount] = useState(0);

  const [reference, setReference] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  const total = useMemo(
    () => amount,
    [amount]
  );

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<Receipt className="text-green-600"/>

Receipt Voucher

</h1>

<p className="mt-2 text-slate-500">

Receive payment from customers.

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

<Button className="bg-green-600 hover:bg-green-700">

<Save className="mr-2 h-4 w-4"/>

Save

</Button>

</div>

</div>

<div className="grid gap-6 lg:grid-cols-2">

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Receipt Details

</h2>

<div className="space-y-4">

<Input
value={voucherNo}
readOnly
/>

<Input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<select
value={receiptMode}
onChange={(e)=>setReceiptMode(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option>Cash</option>
<option>Bank</option>
<option>UPI</option>
<option>Cheque</option>
<option>NEFT</option>

</select>

<Input
placeholder="Reference Number"
value={reference}
onChange={(e)=>setReference(e.target.value)}
/>

</div>

</Card>

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Customer Details

</h2>

<div className="space-y-4">

<select
value={customer}
onChange={(e)=>setCustomer(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">
Select Customer
</option>

{customers.map((c)=>(

<option
key={c}
value={c}
>

{c}

</option>

))}

</select>

<select
value={account}
onChange={(e)=>setAccount(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">
Select Account
</option>

{accounts.map((a)=>(

<option
key={a}
value={a}
>

{a}

</option>

))}

</select>

<Input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>
setAmount(Number(e.target.value))
}
/>

<textarea
rows={5}
value={remarks}
onChange={(e)=>setRemarks(e.target.value)}
placeholder="Narration"
className="w-full rounded-lg border p-3"
/>

</div>

</Card>

</div>
        {/* ================= Receipt Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Additional Details */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Additional Details
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Received From
              </label>

              <Input
                value={customer}
                readOnly
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Deposit Account
              </label>

              <Input
                value={account}
                readOnly
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Receipt Mode
              </label>

              <Input
                value={receiptMode}
                readOnly
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Narration
              </label>

              <textarea
                rows={5}
                value={remarks}
                onChange={(e)=>setRemarks(e.target.value)}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Attachment
              </label>

              <Input type="file"/>

            </div>

          </div>

        </Card>

        {/* Receipt Summary */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Receipt Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Voucher No.</span>

              <span>{voucherNo}</span>

            </div>

            <div className="flex justify-between">

              <span>Date</span>

              <span>{date || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Customer</span>

              <span>{customer || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Deposit Account</span>

              <span>{account || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Receipt Mode</span>

              <span>{receiptMode}</span>

            </div>

            <div className="flex justify-between">

              <span>Reference</span>

              <span>{reference || "-"}</span>

            </div>

            <hr/>

            <div className="flex justify-between text-3xl font-bold text-green-600">

              <span>Total Received</span>

              <span>

                ₹{total.toLocaleString()}

              </span>

            </div>

            <div className="grid gap-3 pt-6">

              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() =>
                  alert("Receipt Saved Successfully")
                }
              >

                <Save className="mr-2 h-4 w-4"/>

                Save Receipt

              </Button>

              <Button
                variant="outline"
                onClick={() => window.print()}
              >

                <Printer className="mr-2 h-4 w-4"/>

                Print Receipt

              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  alert("PDF Download Coming Soon")
                }
              >

                <Download className="mr-2 h-4 w-4"/>

                Download PDF

              </Button>

            </div>

          </div>

        </Card>

      </div>

    </div>

  );

}
