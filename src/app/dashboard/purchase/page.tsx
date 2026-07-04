 "use client";

import { useMemo, useState } from "react";
import {
  ShoppingCart,
  Plus,
  Save,
  Printer,
  Download,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PurchaseItem = {
  id: number;
  product: string;
  hsn: string;
  qty: number;
  unit: string;
  rate: number;
  gst: number;
  discount: number;
};

const suppliers = [
  "ABC Suppliers",
  "Sai Traders",
  "Om Enterprises",
  "Shree Distributors",
];

const productList = [
  {
    name: "HP Laptop",
    hsn: "8471",
    rate: 45000,
    gst: 18,
    unit: "Nos",
  },
  {
    name: "Dell Mouse",
    hsn: "8471",
    rate: 420,
    gst: 18,
    unit: "Nos",
  },
  {
    name: "Keyboard",
    hsn: "8471",
    rate: 700,
    gst: 18,
    unit: "Nos",
  },
];

export default function PurchasePage() {

  const [invoiceNo] = useState("PUR-1001");
  const [supplier, setSupplier] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [notes, setNotes] = useState("");

  const [items, setItems] = useState<PurchaseItem[]>([
    {
      id: 1,
      product: "",
      hsn: "",
      qty: 1,
      unit: "Nos",
      rate: 0,
      gst: 18,
      discount: 0,
    },
  ]);

  function updateItem(
    id: number,
    key: keyof PurchaseItem,
    value: any
  ) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item
      )
    );
  }

  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: "",
        hsn: "",
        qty: 1,
        unit: "Nos",
        rate: 0,
        gst: 18,
        discount: 0,
      },
    ]);
  }

  function removeItem(id: number) {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum +
        item.qty * item.rate -
        item.discount,
      0
    );
  }, [items]);

  const gstAmount = useMemo(() => {
    return items.reduce((sum, item) => {
      const amount =
        item.qty * item.rate -
        item.discount;

      return (
        sum +
        (amount * item.gst) / 100
      );
    }, 0);
  }, [items]);

  const grandTotal =
    subtotal + gstAmount;

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<ShoppingCart className="h-8 w-8 text-green-600"/>

Purchase Invoice

</h1>

<p className="mt-2 text-slate-500">

Create GST Purchase Bills.

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
        {/* ================= Supplier Details ================= */}

      <Card className="p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Supplier Details

        </h2>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Supplier
            </label>

            <select
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            >

              <option value="">
                Select Supplier
              </option>

              {suppliers.map((item) => (

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
              Mobile Number
            </label>

            <Input placeholder="9876543210" />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <Input placeholder="supplier@email.com" />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              GST Number
            </label>

            <Input placeholder="27ABCDE1234F1Z5" />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Supplier Address
            </label>

            <textarea
              rows={4}
              placeholder="Enter Supplier Address"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            />

          </div>

        </div>

      </Card>

      {/* ================= Purchase Details ================= */}

      <Card className="p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Purchase Details

        </h2>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Invoice Number
            </label>

            <Input
              value={invoiceNo}
              readOnly
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Invoice Date
            </label>

            <Input
              type="date"
              value={invoiceDate}
              onChange={(e) =>
                setInvoiceDate(e.target.value)
              }
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Due Date
            </label>

            <Input type="date" />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Payment Mode
            </label>

            <select
              value={paymentMode}
              onChange={(e) =>
                setPaymentMode(e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            >

              <option>Cash</option>
              <option>UPI</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>Credit</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Reference Number
            </label>

            <Input placeholder="Optional" />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Purchase By
            </label>

            <Input placeholder="Admin" />

          </div>

        </div>

      </Card>

    </div>
        {/* ================= Purchase Items ================= */}

      <Card className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">

              Purchase Items

            </h2>

            <p className="text-sm text-slate-500">

              Add products for this purchase invoice

            </p>

          </div>

          <Button
            onClick={addItem}
            className="bg-green-600 hover:bg-green-700"
          >

            <Plus className="mr-2 h-4 w-4"/>

            Add Item

          </Button>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full border">

            <thead className="bg-slate-100">

              <tr>

                <th className="border p-3">Product</th>

                <th className="border p-3">HSN</th>

                <th className="border p-3">Qty</th>

                <th className="border p-3">Unit</th>

                <th className="border p-3">Rate</th>

                <th className="border p-3">GST %</th>

                <th className="border p-3">Discount</th>

                <th className="border p-3">Amount</th>

                <th className="border p-3">Action</th>

              </tr>

            </thead>

            <tbody>

              {items.map((item) => {

                const amount =
                  item.qty * item.rate -
                  item.discount;

                return (

                  <tr key={item.id}>

                    <td className="border p-2">

                      <select
                        value={item.product}
                        onChange={(e) => {

                          const selected =
                            productList.find(
                              (p) =>
                                p.name ===
                                e.target.value
                            );

                          updateItem(
                            item.id,
                            "product",
                            e.target.value
                          );

                          if (selected) {

                            updateItem(
                              item.id,
                              "hsn",
                              selected.hsn
                            );

                            updateItem(
                              item.id,
                              "rate",
                              selected.rate
                            );

                            updateItem(
                              item.id,
                              "gst",
                              selected.gst
                            );

                            updateItem(
                              item.id,
                              "unit",
                              selected.unit
                            );

                          }

                        }}
                        className="w-44 rounded border p-2"
                      >

                        <option value="">

                          Select

                        </option>

                        {productList.map((p) => (

                          <option
                            key={p.name}
                            value={p.name}
                          >

                            {p.name}

                          </option>

                        ))}

                      </select>

                    </td>

                    <td className="border p-2">

                      <Input
                        value={item.hsn}
                        readOnly
                      />

                    </td>

                    <td className="border p-2">

                      <Input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "qty",
                            Number(e.target.value)
                          )
                        }
                      />

                    </td>

                    <td className="border p-2">

                      <Input
                        value={item.unit}
                        readOnly
                      />

                    </td>

                    <td className="border p-2">

                      <Input
                        type="number"
                        value={item.rate}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "rate",
                            Number(e.target.value)
                          )
                        }
                      />

                    </td>

                    <td className="border p-2">

                      <Input
                        type="number"
                        value={item.gst}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "gst",
                            Number(e.target.value)
                          )
                        }
                      />

                    </td>

                    <td className="border p-2">

                      <Input
                        type="number"
                        value={item.discount}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "discount",
                            Number(e.target.value)
                          )
                        }
                      />

                    </td>

                    <td className="border p-2 text-center font-semibold text-green-600">

                      ₹{amount.toLocaleString()}

                    </td>

                    <td className="border p-2 text-center">

                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >

                        <Trash2 className="h-4 w-4"/>

                      </Button>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </Card>
        {/* ================= Notes & Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Notes */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Notes & Terms
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Notes
              </label>

              <textarea
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Purchase Notes..."
                className="w-full rounded-lg border border-slate-300 p-3"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Terms & Conditions
              </label>

              <textarea
                rows={5}
                placeholder="Goods received in good condition."
                className="w-full rounded-lg border border-slate-300 p-3"
              />

            </div>

          </div>

        </Card>

        {/* Summary */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Purchase Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>₹{subtotal.toLocaleString()}</span>

            </div>

            <div className="flex justify-between">

              <span>CGST</span>

              <span>
                ₹{(gstAmount / 2).toFixed(2)}
              </span>

            </div>

            <div className="flex justify-between">

              <span>SGST</span>

              <span>
                ₹{(gstAmount / 2).toFixed(2)}
              </span>

            </div>

            <div className="flex justify-between">

              <span>IGST</span>

              <span>₹0.00</span>

            </div>

            <div className="flex justify-between">

              <span>Total Discount</span>

              <span>

                ₹
                {items
                  .reduce(
                    (sum, item) =>
                      sum + item.discount,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold text-green-600">

              <span>Grand Total</span>

              <span>

                ₹{grandTotal.toLocaleString()}

              </span>

            </div>

            <div className="grid gap-3 pt-6">

              <Button className="bg-green-600 hover:bg-green-700">

                <Save className="mr-2 h-4 w-4"/>

                Save Purchase

              </Button>

              <Button
                variant="outline"
                onClick={() => window.print()}
              >

                <Printer className="mr-2 h-4 w-4"/>

                Print Purchase

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

    </div>

  );

}
