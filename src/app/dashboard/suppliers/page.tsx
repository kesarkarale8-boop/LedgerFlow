 "use client";

import { useMemo, useState } from "react";
import {
  Truck,
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

type Supplier = {
  id: number;
  name: string;
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

export default function SuppliersPage() {

  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");
  const [openingBalance, setOpeningBalance] = useState(0);

  const [suppliers, setSuppliers] =
    useState<Supplier[]>([
      {
        id: 1,
        name: "ABC Supplier",
        mobile: "9876543210",
        email: "abc@gmail.com",
        gst: "27ABCDE1234F1Z5",
        pan: "ABCDE1234F",
        address: "Pune",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        openingBalance: 45000,
      },
    ]);

  const filtered = useMemo(() => {

    return suppliers.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search, suppliers]);

  function addSupplier() {

    if (!name) return;

    setSuppliers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
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

    setName("");
    setMobile("");
    setEmail("");
    setGst("");
    setPan("");
    setAddress("");
    setCity("");
    setStateName("");
    setPincode("");
    setOpeningBalance(0);
  }

  function deleteSupplier(id: number) {

    setSuppliers((prev) =>
      prev.filter((x) => x.id !== id)
    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold">

            <Truck className="h-8 w-8 text-orange-600" />

            Supplier Master

          </h1>

          <p className="mt-2 text-slate-500">

            Manage supplier information.

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
            className="bg-orange-600 hover:bg-orange-700"
            onClick={addSupplier}
          >

            <Plus className="mr-2 h-4 w-4" />

            Add Supplier

          </Button>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-4">

        <Card className="p-5">
          <p className="text-sm text-slate-500">
            Total Suppliers
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            {suppliers.length}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">
            Opening Balance
          </p>
          <h2 className="mt-3 text-3xl font-bold text-green-600">
            ₹
            {suppliers
              .reduce(
                (sum, item) =>
                  sum + item.openingBalance,
                0
              )
              .toLocaleString()}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">
            Search Result
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-600">
            {filtered.length}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-sm text-slate-500">
            Active Suppliers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-orange-600">
            {suppliers.length}
          </h2>
        </Card>
      </div>
              {/* ================= Search ================= */}

      <Card className="p-6">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-500" />

          <Input
            placeholder="Search Supplier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Create Supplier */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Supplier Information

          </h2>

          <div className="space-y-4">

            <Input
              placeholder="Supplier Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Supplier Address"
              className="w-full rounded-lg border p-3"
            />

            <Button
              className="w-full bg-orange-600 hover:bg-orange-700"
              onClick={addSupplier}
            >

              <Save className="mr-2 h-4 w-4" />

              Save Supplier

            </Button>

          </div>

        </Card>

        {/* Supplier Table */}

        <Card className="lg:col-span-2 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="border p-3">Supplier</th>

                  <th className="border p-3">Mobile</th>

                  <th className="border p-3">GST</th>

                  <th className="border p-3">City</th>

                  <th className="border p-3">Balance</th>

                  <th className="border p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((supplier) => (

                  <tr
                    key={supplier.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="border p-3 font-medium">

                      {supplier.name}

                    </td>

                    <td className="border p-3">

                      {supplier.mobile}

                    </td>

                    <td className="border p-3">

                      {supplier.gst}

                    </td>

                    <td className="border p-3">

                      {supplier.city}

                    </td>

                    <td className="border p-3 font-semibold text-green-600">

                      ₹{supplier.openingBalance.toLocaleString()}

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
                            deleteSupplier(supplier.id)
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
              {/* ================= Supplier Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Supplier Summary

          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Suppliers</span>

              <span className="font-semibold">

                {suppliers.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Opening Balance</span>

              <span className="font-semibold text-green-600">

                ₹
                {suppliers
                  .reduce(
                    (sum, item) =>
                      sum + item.openingBalance,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Search Results</span>

              <span className="font-semibold text-blue-600">

                {filtered.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Average Balance</span>

              <span className="font-semibold text-orange-600">

                ₹
                {suppliers.length
                  ? Math.round(
                      suppliers.reduce(
                        (sum, item) =>
                          sum + item.openingBalance,
                        0
                      ) / suppliers.length
                    ).toLocaleString()
                  : 0}

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="font-semibold">

                Supplier Information

              </h3>

              <p className="mt-2 text-sm text-slate-600">

                Store GST details, PAN,
                opening balance, city,
                state and complete supplier
                information in one place.

              </p>

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
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() =>
                alert("Supplier Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4" />

              Save Supplier

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4" />

              Print Suppliers

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

          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-4">

            <h3 className="font-semibold text-orange-700">

              ERP Module

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Supplier Master integrates
              with Purchase, Payment,
              Ledger and GST modules for
              complete ERP workflow.

            </p>

          </div>

        </Card>

      </div>

    </div>

  );
}
