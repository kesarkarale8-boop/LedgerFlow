 "use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Plus,
  Search,
  Pencil,
  Trash2,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Ledger = {
  id: number;
  name: string;
  group: string;
  mobile: string;
  email: string;
  gst: string;
  pan: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  openingBalance: number;
};

const ledgerGroups = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Bank Accounts",
  "Cash In Hand",
  "Sales Account",
  "Purchase Account",
  "Indirect Expense",
  "Direct Expense",
];

export default function LedgerPage() {
  const [search, setSearch] = useState("");

  const [ledgerName, setLedgerName] = useState("");
  const [group, setGroup] = useState("Sundry Debtors");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");
  const [openingBalance, setOpeningBalance] = useState(0);

  const [ledgers, setLedgers] = useState<Ledger[]>([
    {
      id: 1,
      name: "ABC Traders",
      group: "Sundry Debtors",
      mobile: "9876543210",
      email: "abc@gmail.com",
      gst: "27ABCDE1234F1Z5",
      pan: "ABCDE1234F",
      address: "Shivaji Nagar",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411005",
      openingBalance: 25000,
    },
    {
      id: 2,
      name: "XYZ Suppliers",
      group: "Sundry Creditors",
      mobile: "9988776655",
      email: "xyz@gmail.com",
      gst: "27PQRSX4567A1Z2",
      pan: "PQRSX4567A",
      address: "Andheri",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400053",
      openingBalance: 18000,
    },
  ]);

  const filteredLedgers = useMemo(() => {
    return ledgers.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.group.toLowerCase().includes(search.toLowerCase())
    );
  }, [ledgers, search]);

  const addLedger = () => {
    if (!ledgerName) return;

    setLedgers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: ledgerName,
        group,
        mobile,
        email,
        gst,
        pan,
        address,
        city,
        state: stateName,
        pincode,
        openingBalance,
      },
    ]);

    setLedgerName("");
    setGroup("Sundry Debtors");
    setMobile("");
    setEmail("");
    setGst("");
    setPan("");
    setAddress("");
    setCity("");
    setStateName("");
    setPincode("");
    setOpeningBalance(0);
  };

  const deleteLedger = (id: number) => {
    setLedgers((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold">

            <BookOpen className="h-8 w-8 text-blue-600" />

            Ledger Master

          </h1>

          <p className="mt-2 text-slate-500">

            Create and manage business ledgers.

          </p>

        </div>

        <div className="flex gap-3">

          <Button variant="outline">

            <Printer className="mr-2 h-4 w-4" />

            Print

          </Button>

          <Button variant="outline">

            <Download className="mr-2 h-4 w-4" />

            Export

          </Button>

          <Button
            onClick={addLedger}
            className="bg-blue-600 hover:bg-blue-700"
          >

            <Plus className="mr-2 h-4 w-4" />

            New Ledger

          </Button>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid gap-5 md:grid-cols-4">

        <Card className="p-5">
          <p className="text-sm text-slate-500">Total Ledgers</p>
          <h2 className="mt-3 text-3xl font-bold">
            {ledgers.length}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">Total Balance</p>
          <h2 className="mt-3 text-3xl font-bold text-green-600">
            ₹
            {ledgers
              .reduce((sum, item) => sum + item.openingBalance, 0)
              .toLocaleString()}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">Debtors</p>
          <h2 className="mt-3 text-3xl font-bold text-blue-600">
            {
              ledgers.filter(
                (x) => x.group === "Sundry Debtors"
              ).length
            }
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">Creditors</p>
          <h2 className="mt-3 text-3xl font-bold text-red-600">
            {
              ledgers.filter(
                (x) => x.group === "Sundry Creditors"
              ).length
            }
          </h2>
        </Card>

      </div>
           {/* Search */}

      <Card className="p-6">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-500" />

          <Input
            placeholder="Search ledger..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Create Ledger */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Create Ledger

          </h2>

          <div className="space-y-4">

            <Input
              placeholder="Ledger Name"
              value={ledgerName}
              onChange={(e) => setLedgerName(e.target.value)}
            />

            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              {ledgerGroups.map((g) => (

                <option
                  key={g}
                  value={g}
                >
                  {g}
                </option>

              ))}

            </select>

            <Input
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="GST Number"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />

            <Input
              placeholder="PAN Number"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />

            <Input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Input
              placeholder="State"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />

            <Input
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <Input
              type="number"
              placeholder="Opening Balance"
              value={openingBalance}
              onChange={(e) =>
                setOpeningBalance(Number(e.target.value))
              }
            />

            <textarea
              rows={4}
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border p-3"
            />

            <Button
              onClick={addLedger}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >

              <Save className="mr-2 h-4 w-4" />

              Save Ledger

            </Button>

          </div>

        </Card>

        {/* Ledger Table */}

        <Card className="lg:col-span-2 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="border p-3">Ledger</th>

                  <th className="border p-3">Group</th>

                  <th className="border p-3">Mobile</th>

                  <th className="border p-3">GST</th>

                  <th className="border p-3">Balance</th>

                  <th className="border p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredLedgers.map((ledger) => (

                  <tr
                    key={ledger.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="border p-3 font-medium">

                      {ledger.name}

                    </td>

                    <td className="border p-3">

                      {ledger.group}

                    </td>

                    <td className="border p-3">

                      {ledger.mobile}

                    </td>

                    <td className="border p-3">

                      {ledger.gst}

                    </td>

                    <td className="border p-3 font-semibold text-green-600">

                      ₹{ledger.openingBalance.toLocaleString()}

                    </td>

                    <td className="border p-3">

                      <div className="flex gap-2">

                        <Button
                          size="icon"
                          variant="outline"
                        >

                          <Pencil className="h-4 w-4" />

                        </Button>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() =>
                            deleteLedger(ledger.id)
                          }
                        >

                          <Trash2 className="h-4 w-4" />

                        </Button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </Card>

      </div>
           {/* ================= Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Ledger Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Ledgers</span>

              <span className="font-semibold">

                {ledgers.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Sundry Debtors</span>

              <span className="font-semibold text-blue-600">

                {
                  ledgers.filter(
                    (x) => x.group === "Sundry Debtors"
                  ).length
                }

              </span>

            </div>

            <div className="flex justify-between">

              <span>Sundry Creditors</span>

              <span className="font-semibold text-red-600">

                {
                  ledgers.filter(
                    (x) => x.group === "Sundry Creditors"
                  ).length
                }

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Opening Balance</span>

              <span className="font-semibold text-green-600">

                ₹
                {ledgers
                  .reduce(
                    (sum, item) =>
                      sum + item.openingBalance,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="mb-2 font-semibold">
                Ledger Groups
              </h3>

              <ul className="space-y-2 text-sm text-slate-600">

                {ledgerGroups.map((group) => (

                  <li key={group}>

                    • {group}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </Card>

        {/* ================= Actions ================= */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Quick Actions

          </h2>

          <div className="grid gap-4">

            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                alert("Ledger Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4" />

              Save Ledger

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4" />

              Print Ledger

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("Excel Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4" />

              Export Excel

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("PDF Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4" />

              Download PDF

            </Button>

          </div>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">

            <h3 className="font-semibold text-blue-700">

              Information

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Manage customer, supplier, bank,
              cash and expense ledgers from a
              single professional ERP interface.

            </p>

          </div>

        </Card>

      </div>

    </div>

  );

}
