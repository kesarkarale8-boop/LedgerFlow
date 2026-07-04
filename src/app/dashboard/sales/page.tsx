 "use client";

import { useMemo, useState } from "react";
import {
  Receipt,
  Plus,
  Trash2,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InvoiceItem = {
  id: number;
  product: string;
  hsn: string;
  qty: number;
  unit: string;
  rate: number;
  gst: number;
  discount: number;
};

const customers = [
  "ABC Traders",
  "XYZ Enterprises",
  "Sai Electricals",
  "Shree Ganesh Mart",
];

const products = [
  {
    name: "HP Laptop",
    hsn: "8471",
    rate: 52000,
    gst: 18,
    unit: "Pc",
  },
  {
    name: "Dell Mouse",
    hsn: "8471",
    rate: 550,
    gst: 18,
    unit: "Pc",
  },
  {
    name: "Keyboard",
    hsn: "8471",
    rate: 850,
    gst: 18,
    unit: "Pc",
  },
];

export default function SalesPage() {
  const [customer, setCustomer] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [notes, setNotes] = useState("");

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: 1,
      product: "",
      hsn: "",
      qty: 1,
      unit: "Pc",
      rate: 0,
      gst: 18,
      discount: 0,
    },
  ]);

  const updateItem = (
    id: number,
    key: keyof InvoiceItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [key]: value }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: "",
        hsn: "",
        qty: 1,
        unit: "Pc",
        rate: 0,
        gst: 18,
        discount: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.qty * item.rate - item.discount;
    }, 0);
  }, [items]);

  const gstAmount = useMemo(() => {
    return items.reduce((sum, item) => {
      const taxable = item.qty * item.rate - item.discount;
      return sum + taxable * item.gst / 100;
    }, 0);
  }, [items]);

  const grandTotal = subtotal + gstAmount;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold">

            <Receipt className="text-blue-600" />

            Sales Invoice

          </h1>

          <p className="mt-2 text-slate-500">
            Create GST compliant invoices.
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

          <Button>

            <Save className="mr-2 h-4 w-4"/>

            Save

          </Button>

        </div>

      </div>

      {/* Customer + Invoice */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Customer Details
          </h2>

          <div className="space-y-4">

            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              <option value="">
                Select Customer
              </option>

              {customers.map((c) => (

                <option key={c}>
                  {c}
                </option>

              ))}

            </select>

            <Input placeholder="Mobile Number"/>

            <Input placeholder="Email"/>

            <Input placeholder="GST Number"/>

            <textarea
              rows={4}
              placeholder="Billing Address"
              className="w-full rounded-lg border p-3"
            />

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Invoice Details
          </h2>

          <div className="space-y-4">

            <Input
              value="INV-1001"
              readOnly
            />

            <Input
              type="date"
              value={invoiceDate}
              onChange={(e) =>
                setInvoiceDate(e.target.value)
              }
            />

            <Input type="date"/>

            <select
              value={paymentMode}
              onChange={(e)=>
                setPaymentMode(e.target.value)
              }
              className="w-full rounded-lg border p-3"
            >

              <option>Cash</option>
              <option>UPI</option>
              <option>Card</option>
              <option>Bank Transfer</option>

            </select>

            <Input placeholder="Reference No."/>

            <Input placeholder="Sales Person"/>

          </div>

        </Card>

      </div>
            {/* ================= Invoice Items ================= */}

      <Card className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              Invoice Items
            </h2>

            <p className="text-sm text-slate-500">
              Add products to this invoice
            </p>

          </div>

          <Button onClick={addItem}>

            <Plus className="mr-2 h-4 w-4"/>

            Add Item

          </Button>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full border rounded-lg">

            <thead className="bg-slate-100">

              <tr>

                <th className="border p-3">Product</th>

                <th className="border p-3">HSN</th>

                <th className="border p-3">Qty</th>

                <th className="border p-3">Unit</th>

                <th className="border p-3">Rate</th>

                <th className="border p-3">GST%</th>

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

                        onChange={(e)=>{

                          const selected =
                            products.find(
                              p=>p.name===e.target.value
                            );

                          updateItem(
                            item.id,
                            "product",
                            e.target.value
                          );

                          if(selected){

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

                        className="w-52 rounded border p-2"

                      >

                        <option value="">
                          Select Product
                        </option>

                        {products.map((p)=>(

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
                        onChange={(e)=>
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
                        onChange={(e)=>
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
                        onChange={(e)=>
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
                        onChange={(e)=>
                          updateItem(
                            item.id,
                            "discount",
                            Number(e.target.value)
                          )
                        }
                      />

                    </td>

                    <td className="border p-2 text-center font-semibold text-blue-600">

                      ₹{amount.toLocaleString()}

                    </td>

                    <td className="border p-2 text-center">

                      <Button

                        size="icon"

                        variant="destructive"

                        onClick={()=>
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
            {/* ================= Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Notes */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Notes & Terms
          </h2>

          <div className="space-y-5">

            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Invoice Notes"
              className="w-full rounded-lg border p-3"
            />

            <textarea
              rows={5}
              placeholder="Terms & Conditions"
              className="w-full rounded-lg border p-3"
            />

          </div>

        </Card>

        {/* Invoice Summary */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Invoice Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>
                ₹{subtotal.toLocaleString()}
              </span>

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
                    (sum, i) => sum + i.discount,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <hr />

            <div className="flex justify-between text-3xl font-bold text-blue-600">

              <span>Grand Total</span>

              <span>

                ₹{grandTotal.toLocaleString()}

              </span>

            </div>

            <div className="grid gap-3 pt-6">

              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  alert("Invoice Saved Successfully");
                }}
              >

                <Save className="mr-2 h-4 w-4" />

                Save Invoice

              </Button>

              <Button
                variant="outline"
                onClick={() => window.print()}
              >

                <Printer className="mr-2 h-4 w-4" />

                Print Invoice

              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  alert("PDF Download Coming Soon");
                }}
              >

                <Download className="mr-2 h-4 w-4" />

                Download PDF

              </Button>

            </div>

          </div>

        </Card>

      </div>

    </div>
  );
}
