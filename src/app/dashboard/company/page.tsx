 "use client";

import { useState } from "react";

import {
  Building2,
  Upload,
  Camera,
  Mail,
  Phone,
  Globe,
  Building,
  Save,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
 
export default function CompanyPage() {
  const [logo, setLogo] = useState("");

 const [form, setForm] = useState({
  companyName: "",
  companyType: "",
  gst: "",
  email: "",
  phone: "",
  website: "",

  address: "",
  country: "",
  state: "",
  city: "",
  pincode: "",

  pan: "",
  cin: "",
  tan: "",

  bank: "",
  account: "",
  ifsc: "",

  fyStart: "",
  fyEnd: "",

  currency: "INR",
  timezone: "Asia/Kolkata",

  description: "",
});
  const handleChange = (
    key: string,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
     <div className="space-y-8">
 
      {/* Hero */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-10 text-white shadow-xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">

              <Building2 size={40} />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Company Setup
              </h1>

              <p className="mt-2 text-blue-100 text-lg">
                Configure your business profile for
                LedgerFlow ERP.
              </p>

            </div>

          </div>

          <div className="rounded-2xl bg-white/10 px-8 py-6">

            <p className="text-blue-100">
              Company Status
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Active
            </h2>

          </div>

        </div>

      </div>

      {/* Profile */}

      <Card className="rounded-3xl border-0 shadow-lg">

        <CardHeader>

          <CardTitle className="flex items-center gap-3">

            <Building2 className="text-blue-600" />

            Company Profile

          </CardTitle>

        </CardHeader>

        <CardContent>

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Logo */}

            <div className="flex flex-col items-center">

              <div className="relative">

                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-dashed border-slate-300 bg-slate-100">

                  {logo ? (
                    <img
                      src={logo}
                      alt="logo"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Building2
                      size={80}
                      className="text-slate-400"
                    />
                  )}

                </div>

                <label className="absolute bottom-2 right-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700">

                  <Camera size={20} />

                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      if (!e.target.files?.length) return;

                      setLogo(
                        URL.createObjectURL(
                          e.target.files[0]
                        )
                      );
                    }}
                  />

                </label>

              </div>

              <Button
                variant="outline"
                className="mt-6"
              >
                <Upload className="mr-2 h-4 w-4" />

                Upload Logo

              </Button>

            </div>

            {/* Basic Details */}

            <div className="lg:col-span-2">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <Label>
                    Company Name
                  </Label>

                  <Input
                    placeholder="ABC Pvt Ltd"
                    value={form.companyName}
                    onChange={(e) =>
                      handleChange(
                        "companyName",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div>

                  <Label>
                    Company Type
                  </Label>

                  <Input
                    placeholder="Private Limited"
                    value={form.companyType}
                    onChange={(e) =>
                      handleChange(
                        "companyType",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div>

                  <Label>
                    GST Number
                  </Label>

                  <Input
                    placeholder="27ABCDE1234F1Z5"
                    value={form.gst}
                    onChange={(e) =>
                      handleChange(
                        "gst",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div>

                  <Label>Email</Label>

                  <div className="relative">

                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                    <Input
                      className="pl-10"
                      placeholder="company@gmail.com"
                      value={form.email}
                      onChange={(e) =>
                        handleChange(
                          "email",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div>

                  <Label>
                    Phone Number
                  </Label>

                  <div className="relative">

                    <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                    <Input
                      className="pl-10"
                      placeholder="+91 9876543210"
                      value={form.phone}
                      onChange={(e) =>
                        handleChange(
                          "phone",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div>

                  <Label>
                    Website
                  </Label>

                  <div className="relative">

                    <Globe className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                    <Input
                      className="pl-10"
                      placeholder="www.company.com"
                      value={form.website}
                      onChange={(e) =>
                        handleChange(
                          "website",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>
                                {/* Address */}

                <div className="md:col-span-2">

                  <Label>
                    Company Address
                  </Label>

                  <Input
                    placeholder="Enter Company Address"
                    value={form.address}
                    onChange={(e) =>
                      handleChange(
                        "address",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* Country */}

                <div>

                  <Label>
                    Country
                  </Label>

                  <Input
                    placeholder="India"
                    value={form.country}
                    onChange={(e) =>
                      handleChange(
                        "country",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* State */}

                <div>

                  <Label>
                    State
                  </Label>

                  <Input
                    placeholder="Maharashtra"
                    value={form.state}
                    onChange={(e) =>
                      handleChange(
                        "state",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* City */}

                <div>

                  <Label>
                    City
                  </Label>

                  <Input
                    placeholder="Pune"
                    value={form.city}
                    onChange={(e) =>
                      handleChange(
                        "city",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* Pincode */}

                <div>

                  <Label>
                    Pincode
                  </Label>

                  <Input
                    placeholder="411001"
                    value={form.pincode}
                    onChange={(e) =>
                      handleChange(
                        "pincode",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* PAN */}

                <div>

                  <Label>
                    PAN Number
                  </Label>

                  <Input
                    placeholder="ABCDE1234F"
                    value={form.pan}
                    onChange={(e) =>
                      handleChange(
                        "pan",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* CIN */}

                <div>

                  <Label>
                    CIN Number
                  </Label>

                  <Input
                    placeholder="L12345MH2026PLC123456"
                    value={form.cin}
                    onChange={(e) =>
                      handleChange(
                        "cin",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* TAN */}

                <div>

                  <Label>
                    TAN Number
                  </Label>

                  <Input
                    placeholder="PNEX12345A"
                    value={form.tan}
                    onChange={(e) =>
                      handleChange(
                        "tan",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* Bank */}

                <div>

                  <Label>
                    Bank Name
                  </Label>

                  <Input
                    placeholder="State Bank of India"
                    value={form.bank}
                    onChange={(e) =>
                      handleChange(
                        "bank",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* Account */}

                <div>

                  <Label>
                    Account Number
                  </Label>

                  <Input
                    placeholder="XXXXXXXXXXXX"
                    value={form.account}
                    onChange={(e) =>
                      handleChange(
                        "account",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* IFSC */}

                <div>

                  <Label>
                    IFSC Code
                  </Label>

                  <Input
                    placeholder="SBIN0000001"
                    value={form.ifsc}
                    onChange={(e) =>
                      handleChange(
                        "ifsc",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

            </div>

          </div>

        </CardContent>

      </Card>

            {/* Financial Settings */}

      <Card className="rounded-3xl border-0 shadow-lg">

        <CardHeader>

          <CardTitle className="flex items-center gap-3">

            <Building className="text-blue-600" />

            Financial Settings

          </CardTitle>

        </CardHeader>

        <CardContent>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <Label>
                Financial Year Start
              </Label>

              <Input
                type="date"
                value={form.fyStart}
                onChange={(e) =>
                  handleChange(
                    "fyStart",
                    e.target.value
                  )
                }
              />

            </div>

            <div>

              <Label>
                Financial Year End
              </Label>

              <Input
                type="date"
                value={form.fyEnd}
                onChange={(e) =>
                  handleChange(
                    "fyEnd",
                    e.target.value
                  )
                }
              />

            </div>

            <div>

              <Label>
                Currency
              </Label>

              <select
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3"
                value={form.currency}
                onChange={(e) =>
                  handleChange(
                    "currency",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select Currency
                </option>

                <option value="INR">
                  INR (₹)
                </option>

                <option value="USD">
                  USD ($)
                </option>

                <option value="EUR">
                  EUR (€)
                </option>

              </select>

            </div>

            <div>

              <Label>
                Time Zone
              </Label>

              <select
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3"
                value={form.timezone}
                onChange={(e) =>
                  handleChange(
                    "timezone",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select Timezone
                </option>

                <option value="Asia/Kolkata">
                  Asia/Kolkata
                </option>

                <option value="UTC">
                  UTC
                </option>

              </select>

            </div>

            <div className="md:col-span-2">

              <Label>
                Company Description
              </Label>

              <textarea
                rows={5}
                placeholder="Write something about your company..."
                value={form.description}
                onChange={(e) =>
                  handleChange(
                    "description",
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
              />

            </div>

          </div>

        </CardContent>

      </Card>

      {/* Save Button */}

      <div className="flex justify-end">

        <Button
          size="lg"
          className="rounded-xl bg-blue-600 px-10 hover:bg-blue-700"
          onClick={() => {
            console.log(form);
            alert("Company Saved Successfully 🎉");
          }}
        >
          <Save className="mr-2 h-5 w-5" />

          Save Company

        </Button>

      </div>

    </div>
   );
}
