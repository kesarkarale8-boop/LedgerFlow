
 "use client";

import { useMemo, useState } from "react";
import {
  Boxes,
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

type StockGroup = {
  id: number;
  name: string;
  parent: string;
  nature: string;
  gst: boolean;
  description: string;
};

const parentGroups = [
  "Primary",
  "Raw Material",
  "Finished Goods",
  "Electronics",
  "Accessories",
  "Stationery",
];

export default function StockGroupsPage() {
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [parent, setParent] = useState("Primary");
  const [nature, setNature] = useState("Assets");
  const [gst, setGst] = useState(true);
  const [description, setDescription] = useState("");

  const [groups, setGroups] = useState<StockGroup[]>([
    {
      id: 1,
      name: "Laptops",
      parent: "Electronics",
      nature: "Assets",
      gst: true,
      description: "Laptop Category",
    },
    {
      id: 2,
      name: "Mobiles",
      parent: "Electronics",
      nature: "Assets",
      gst: true,
      description: "Mobile Category",
    },
    {
      id: 3,
      name: "Furniture",
      parent: "Primary",
      nature: "Assets",
      gst: false,
      description: "Office Furniture",
    },
  ]);

  const filtered = useMemo(() => {
    return groups.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.parent.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, groups]);

  function addGroup() {
    if (!name) return;

    setGroups((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        parent,
        nature,
        gst,
        description,
      },
    ]);

    setName("");
    setParent("Primary");
    setNature("Assets");
    setGst(true);
    setDescription("");
  }

  function deleteGroup(id: number) {
    setGroups((prev) => prev.filter((x) => x.id !== id));
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold">

            <Boxes className="h-8 w-8 text-indigo-600" />

            Stock Groups

          </h1>

          <p className="mt-2 text-slate-500">

            Manage stock categories professionally.

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
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={addGroup}
          >

            <Plus className="mr-2 h-4 w-4" />

            New Group

          </Button>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid gap-5 md:grid-cols-4">

        <Card className="p-5">

          <p className="text-sm text-slate-500">

            Total Groups

          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {groups.length}

          </h2>

        </Card>

        <Card className="p-5">

          <p className="text-sm text-slate-500">

            GST Enabled

          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-600">

            {groups.filter((g) => g.gst).length}

          </h2>

        </Card>

        <Card className="p-5">

          <p className="text-sm text-slate-500">

            Parent Groups

          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-600">

            {parentGroups.length}

          </h2>

        </Card>

        <Card className="p-5">

          <p className="text-sm text-slate-500">

            Search Result

          </p>

          <h2 className="mt-3 text-3xl font-bold text-indigo-600">

            {filtered.length}

          </h2>

        </Card>

      </div>
            {/* ================= Search ================= */}

      <Card className="p-6">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-500" />

          <Input
            placeholder="Search Stock Group..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* ================= Create Group ================= */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Create Stock Group

          </h2>

          <div className="space-y-4">

            <Input
              placeholder="Group Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              {parentGroups.map((item) => (

                <option
                  key={item}
                  value={item}
                >

                  {item}

                </option>

              ))}

            </select>

            <select
              value={nature}
              onChange={(e) => setNature(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              <option>Assets</option>
              <option>Liabilities</option>
              <option>Income</option>
              <option>Expenses</option>

            </select>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={gst}
                onChange={(e) =>
                  setGst(e.target.checked)
                }
              />

              GST Applicable

            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Description"
              className="w-full rounded-lg border p-3"
            />

            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              onClick={addGroup}
            >

              <Save className="mr-2 h-4 w-4" />

              Save Group

            </Button>

          </div>

        </Card>

        {/* ================= Group Table ================= */}

        <Card className="lg:col-span-2 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="border p-3">
                    Group Name
                  </th>

                  <th className="border p-3">
                    Parent
                  </th>

                  <th className="border p-3">
                    Nature
                  </th>

                  <th className="border p-3">
                    GST
                  </th>

                  <th className="border p-3">
                    Description
                  </th>

                  <th className="border p-3">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((group) => (

                  <tr
                    key={group.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="border p-3 font-medium">

                      {group.name}

                    </td>

                    <td className="border p-3">

                      {group.parent}

                    </td>

                    <td className="border p-3">

                      {group.nature}

                    </td>

                    <td className="border p-3 text-center">

                      {group.gst ? "Yes" : "No"}

                    </td>

                    <td className="border p-3">

                      {group.description}

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
                            deleteGroup(group.id)
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

            Stock Group Summary

          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Groups</span>

              <span className="font-semibold">

                {groups.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>GST Enabled</span>

              <span className="font-semibold text-green-600">

                {groups.filter((g) => g.gst).length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Search Results</span>

              <span className="font-semibold text-blue-600">

                {filtered.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Parent Groups</span>

              <span className="font-semibold text-indigo-600">

                {parentGroups.length}

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="font-semibold">

                About Stock Groups

              </h3>

              <p className="mt-2 text-sm text-slate-600">

                Stock Groups help organize inventory into
                logical categories such as Electronics,
                Furniture, Raw Materials and Finished Goods.
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
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={() =>
                alert("Stock Group Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4" />

              Save Group

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4" />

              Print Groups

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

          <div className="mt-8 rounded-lg border border-indigo-200 bg-indigo-50 p-4">

            <h3 className="font-semibold text-indigo-700">

              ERP Integration

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Stock Groups are linked with Stock Items,
              Purchase, Sales, Inventory Reports and GST
              for complete ERP inventory management.

            </p>

          </div>

        </Card>

      </div>

    </div>

  );

}
