 "use client";

import { useMemo, useState } from "react";
import {
  Package,
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

type StockItem = {
  id: number;
  name: string;
  sku: string;
  barcode: string;
  group: string;
  unit: string;
  purchasePrice: number;
  salesPrice: number;
  gst: number;
  openingStock: number;
  reorderLevel: number;
};

const stockGroups = [
  "Electronics",
  "Furniture",
  "Accessories",
  "Stationery",
];

const units = [
  "Nos",
  "Kg",
  "Ltr",
  "Box",
  "Dozen",
];

export default function StockItemsPage() {

  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [group, setGroup] = useState("Electronics");
  const [unit, setUnit] = useState("Nos");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [gst, setGst] = useState(18);
  const [openingStock, setOpeningStock] = useState(0);
  const [reorderLevel, setReorderLevel] = useState(0);

  const [items, setItems] =
    useState<StockItem[]>([
      {
        id: 1,
        name: "HP Laptop",
        sku: "HP001",
        barcode: "123456789",
        group: "Electronics",
        unit: "Nos",
        purchasePrice: 45000,
        salesPrice: 52000,
        gst: 18,
        openingStock: 15,
        reorderLevel: 5,
      },
    ]);

  const filtered = useMemo(() => {

    return items.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.group
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  }, [items, search]);

  function addItem() {

    if (!name) return;

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        sku,
        barcode,
        group,
        unit,
        purchasePrice,
        salesPrice,
        gst,
        openingStock,
        reorderLevel,
      },
    ]);

    setName("");
    setSku("");
    setBarcode("");
    setPurchasePrice(0);
    setSalesPrice(0);
    setOpeningStock(0);
    setReorderLevel(0);
  }

  function deleteItem(id:number){

    setItems(prev =>
      prev.filter(x=>x.id!==id)
    );

  }

  return(

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<Package className="h-8 w-8 text-violet-600"/>

Stock Items

</h1>

<p className="mt-2 text-slate-500">

Manage Inventory Products Professionally.

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
className="bg-violet-600 hover:bg-violet-700"
onClick={addItem}
>

<Plus className="mr-2 h-4 w-4"/>

New Item

</Button>

</div>

</div>

<div className="grid gap-5 md:grid-cols-4">

<Card className="p-5">

<p className="text-sm text-slate-500">

Total Items

</p>

<h2 className="mt-3 text-3xl font-bold">

{items.length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Stock Quantity

</p>

<h2 className="mt-3 text-3xl font-bold text-green-600">

{
items.reduce(
(sum,x)=>sum+x.openingStock,
0
)
}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Groups

</p>

<h2 className="mt-3 text-3xl font-bold text-blue-600">

{stockGroups.length}

</h2>

</Card>

<Card className="p-5">

<p className="text-sm text-slate-500">

Search Result

</p>

<h2 className="mt-3 text-3xl font-bold text-violet-600">

{filtered.length}

</h2>

</Card>

</div>
        {/* ================= Search ================= */}

      <Card className="p-6">

        <div className="flex items-center gap-3">

          <Search className="h-5 w-5 text-slate-500" />

          <Input
            placeholder="Search Stock Item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* ================= Add Item ================= */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">

            Item Information

          </h2>

          <div className="space-y-4">

            <Input
              placeholder="Item Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <Input
              placeholder="SKU Code"
              value={sku}
              onChange={(e)=>setSku(e.target.value)}
            />

            <Input
              placeholder="Barcode"
              value={barcode}
              onChange={(e)=>setBarcode(e.target.value)}
            />

            <select
              value={group}
              onChange={(e)=>setGroup(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              {stockGroups.map((g)=>(

                <option
                  key={g}
                  value={g}
                >

                  {g}

                </option>

              ))}

            </select>

            <select
              value={unit}
              onChange={(e)=>setUnit(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              {units.map((u)=>(

                <option
                  key={u}
                  value={u}
                >

                  {u}

                </option>

              ))}

            </select>

            <Input
              type="number"
              placeholder="Purchase Price"
              value={purchasePrice}
              onChange={(e)=>
                setPurchasePrice(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Sales Price"
              value={salesPrice}
              onChange={(e)=>
                setSalesPrice(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="GST %"
              value={gst}
              onChange={(e)=>
                setGst(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Opening Stock"
              value={openingStock}
              onChange={(e)=>
                setOpeningStock(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Reorder Level"
              value={reorderLevel}
              onChange={(e)=>
                setReorderLevel(Number(e.target.value))
              }
            />

            <Button
              className="w-full bg-violet-600 hover:bg-violet-700"
              onClick={addItem}
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Item

            </Button>

          </div>

        </Card>

        {/* ================= Items Table ================= */}

        <Card className="lg:col-span-2 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="border p-3">Item</th>

                  <th className="border p-3">SKU</th>

                  <th className="border p-3">Group</th>

                  <th className="border p-3">Unit</th>

                  <th className="border p-3">Sale Price</th>

                  <th className="border p-3">Stock</th>

                  <th className="border p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((item)=>(

                  <tr
                    key={item.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="border p-3 font-medium">

                      {item.name}

                    </td>

                    <td className="border p-3">

                      {item.sku}

                    </td>

                    <td className="border p-3">

                      {item.group}

                    </td>

                    <td className="border p-3">

                      {item.unit}

                    </td>

                    <td className="border p-3 text-green-600 font-semibold">

                      ₹{item.salesPrice.toLocaleString()}

                    </td>

                    <td className="border p-3">

                      {item.openingStock}

                    </td>

                    <td className="border p-3">

                      <div className="flex gap-2">

                        <Button
                          size="icon"
                          variant="outline"
                        >

                          <Pencil className="h-4 w-4"/>

                        </Button>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={()=>
                            deleteItem(item.id)
                          }
                        >

                          <Trash2 className="h-4 w-4"/>

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
        {/* ================= Inventory Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Inventory Summary

          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Stock Items</span>

              <span className="font-semibold">

                {items.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Purchase Value</span>

              <span className="font-semibold text-blue-600">

                ₹
                {items
                  .reduce(
                    (sum, item) =>
                      sum +
                      item.purchasePrice *
                        item.openingStock,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Sales Value</span>

              <span className="font-semibold text-green-600">

                ₹
                {items
                  .reduce(
                    (sum, item) =>
                      sum +
                      item.salesPrice *
                        item.openingStock,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Low Stock Items</span>

              <span className="font-semibold text-red-600">

                {
                  items.filter(
                    (item) =>
                      item.openingStock <=
                      item.reorderLevel
                  ).length
                }

              </span>

            </div>

            <div className="flex justify-between">

              <span>GST Enabled Items</span>

              <span className="font-semibold text-violet-600">

                {
                  items.filter(
                    (item) => item.gst > 0
                  ).length
                }

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="font-semibold">

                Inventory Status

              </h3>

              <p className="mt-2 text-sm text-slate-600">

                Monitor inventory, stock valuation,
                reorder level and GST enabled
                products from one dashboard.

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
              className="bg-violet-600 hover:bg-violet-700"
              onClick={() =>
                alert("Stock Item Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Item

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4"/>

              Print Items

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("Excel Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4"/>

              Export Excel

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

          <div className="mt-8 rounded-lg border border-violet-200 bg-violet-50 p-4">

            <h3 className="font-semibold text-violet-700">

              ERP Integration

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Stock Items are connected with
              Sales, Purchase, Inventory,
              Barcode, GST Reports,
              Warehouse and Analytics
              modules.

            </p>

          </div>

        </Card>

      </div>
        {/* ================= Footer ================= */}

      <Card className="p-6">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-lg font-semibold">

              Inventory Management

            </h3>

            <p className="text-sm text-slate-500 mt-1">

              Manage products, stock levels, GST,
              pricing, barcode and warehouse inventory
              from one place.

            </p>

          </div>

          <div className="flex gap-3">

            <Button
              className="bg-violet-600 hover:bg-violet-700"
              onClick={addItem}
            >

              <Plus className="mr-2 h-4 w-4" />

              Add New Item

            </Button>

            <Button
              variant="outline"
              onClick={() => window.print()}
            >

              <Printer className="mr-2 h-4 w-4" />

              Print

            </Button>

          </div>

        </div>

      </Card>

    </div>

  );

}
