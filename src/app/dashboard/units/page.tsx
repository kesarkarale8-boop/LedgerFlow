"use client";

import { useMemo, useState } from "react";
import {
  Ruler,
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

type Unit = {
  id: number;
  name: string;
  shortName: string;
  decimal: boolean;
};

export default function UnitsPage() {

  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [decimal, setDecimal] = useState(false);

  const [units, setUnits] = useState<Unit[]>([
    {
      id: 1,
      name: "Numbers",
      shortName: "Nos",
      decimal: false,
    },
    {
      id: 2,
      name: "Kilogram",
      shortName: "Kg",
      decimal: true,
    },
    {
      id: 3,
      name: "Litre",
      shortName: "Ltr",
      decimal: true,
    },
    {
      id: 4,
      name: "Box",
      shortName: "Box",
      decimal: false,
    },
  ]);

  const filtered = useMemo(() => {

    return units.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.shortName
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  }, [search, units]);

  function addUnit() {

    if (!name || !shortName) return;

    setUnits((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        shortName,
        decimal,
      },
    ]);

    setName("");
    setShortName("");
    setDecimal(false);
  }

  function deleteUnit(id: number) {

    setUnits((prev) =>
      prev.filter((x) => x.id !== id)
    );

  }

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<Ruler className="h-8 w-8 text-emerald-600"/>

Units Master

</h1>

<p className="mt-2 text-slate-500">

Manage inventory measurement units.

</p>

</div>

<div className="flex gap-3">

<Button variant="outline">

<Printer className="mr-2 h-4 w-4"/>

Print

</Button>

<Button variant="outline">

<Download className="mr-2 h-4 w-4"/>

Export

</Button>

<Button
className="bg-emerald-600 hover:bg-emerald-700"
onClick={addUnit}
>

<Plus className="mr-2 h-4 w-4"/>

New Unit

</Button>

</div>

</div>

<div className="grid gap-5 md:grid-cols-4">

<Card className="p-5">

<p className="text-sm text-slate-500">

Total Units

</p>

<h2 className="mt-3 text-3xl font-bold">

{units.length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Decimal Units

</p>

<h2 className="mt-3 text-3xl font-bold text-green-600">

{units.filter((u)=>u.decimal).length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Whole Units

</p>

<h2 className="mt-3 text-3xl font-bold text-blue-600">

{units.filter((u)=>!u.decimal).length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Search Result

</p>

<h2 className="mt-3 text-3xl font-bold text-emerald-600">

{filtered.length}

</h2>

</Card>

</div>
        {/* ================= Search ================= */}

      <Card className="p-6">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-500" />

          <Input
            placeholder="Search Unit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* ================= Create Unit ================= */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Unit Information

          </h2>

          <div className="space-y-4">

            <Input
              placeholder="Unit Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Short Name"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
            />

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={decimal}
                onChange={(e) =>
                  setDecimal(e.target.checked)
                }
              />

              Allow Decimal Values

            </label>

            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={addUnit}
            >

              <Save className="mr-2 h-4 w-4" />

              Save Unit

            </Button>

          </div>

        </Card>

        {/* ================= Units Table ================= */}

        <Card className="lg:col-span-2 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="border p-3">

                    Unit Name

                  </th>

                  <th className="border p-3">

                    Short Name

                  </th>

                  <th className="border p-3">

                    Decimal

                  </th>

                  <th className="border p-3">

                    Action

                  </th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((unit) => (

                  <tr
                    key={unit.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="border p-3 font-medium">

                      {unit.name}

                    </td>

                    <td className="border p-3">

                      {unit.shortName}

                    </td>

                    <td className="border p-3 text-center">

                      {unit.decimal ? "Yes" : "No"}

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
                            deleteUnit(unit.id)
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

            Units Summary

          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Units</span>

              <span className="font-semibold">

                {units.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Decimal Units</span>

              <span className="font-semibold text-green-600">

                {units.filter((u) => u.decimal).length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Whole Units</span>

              <span className="font-semibold text-blue-600">

                {units.filter((u) => !u.decimal).length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Search Results</span>

              <span className="font-semibold text-emerald-600">

                {filtered.length}

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="font-semibold">

                About Units

              </h3>

              <p className="mt-2 text-sm text-slate-600">

                Units define how inventory items are measured,
                such as Numbers, Kilograms, Litres, Boxes,
                Dozens, Pieces and more.

              </p>

            </div>

          </div>

        </Card>

        {/* ================= Quick Actions ================= */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Quick Actions

          </h2>

          <div className="grid gap-4">

            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => alert("Unit Saved Successfully")}
            >

              <Save className="mr-2 h-4 w-4" />

              Save Unit

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4" />

              Print Units

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

          <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4">

            <h3 className="font-semibold text-emerald-700">

              ERP Integration

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Units are used across Stock Items,
              Sales Invoice, Purchase Invoice,
              Inventory Reports and Warehouse Management.

            </p>

          </div>

        </Card>

      </div>

    </div>

  );

}
