import { useState } from "react";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TopCards from "../../components/TopCards";
import DataTable from "react-data-table-component";
import SaleInput from "../../components/SaleInput";
import { ArrowRight, X } from "lucide-react";

const topCards = [
  "Sales Menu",
  "All Sale",
  "Item Wise",
  "Client Wise",
  "Sale Return",
  "All Cash Sale Return",
  "All Credit Sale Return",
];

const tableDataTest = [
  {
    name: "Matador Ball Pen",
    stock: "5",
    sale_quantity: "0",
    sale_price: "0",
    price_type: "Pcs",
    total: "0",
  },
  {
    name: "Mouse",
    stock: "7",
    sale_quantity: "0",
    sale_price: "0",
    price_type: "Pcs",
    total: "0",
  },
  {
    name: "Aks>.12mm-40inch",
    stock: "5",
    sale_quantity: "0",
    sale_price: "0",
    price_type: "TON",
    total: "0",
  },
];

const NewSales = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [tableData, setTableData] = useState([]);
  const [saleType, setSaleType] = useState("Cash Sale");

  // for table
  const columns = [
    {
      name: "SL",
      cell: (row, id) => id + 1,
      width: "50px",
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      width: "200px",
      warp: true,
    },
    {
      name: "Stock",
      selector: (row) => (
        <p className="text-xl">{row.stock + " " + row.price_type}</p>
      ),
      width: "`100px",
    },
    {
      name: "Sale Quantity",
      selector: (row) => <SaleInput row={row} setTableData={setTableData} />,
      width: "130px",
    },
    {
      name: "Sale Price",
      selector: (row) => (
        <input
          className="text-xl border w-full"
          defaultValue={row.sale_price}
          onChange={(e) => {
            const value = e.target.value;
            setTableData((prev) =>
              prev.map((item) => {
                if (item.id === row.id) {
                  return {
                    ...item,
                    sale_price: value,
                  };
                } else {
                  return item;
                }
              })
            );
          }}
        />
      ),
      width: "110px",
    },
    {
      name: "Price Type",
      selector: (row) => (
        <select
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          id="showroom"
          name="showroom"
          required
          defaultValue={row.price_type}
        >
          <option value="" disabled>
            Price Type
          </option>
          <option value="Pcs">Pcs</option>
          <option value="TON">TON</option>
        </select>
      ),
      width: "120px",
    },
    // {
    //   name: "Dis.(%)",
    //   selector: (row) => row.due,
    //   width: "100px",
    // },
    // {
    //   name: "Discount",
    //   selector: (row) => row.due,
    //   width: "100px",
    // },
    {
      name: "Total",
      selector: (row) => (
        <span className="text-xl">{row.sale_price * row.sale_quantity}</span>
      ),
      width: "80px",
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          type="button"
          onClick={() =>
            setTableData((prev) => prev.filter((item) => item.id !== row.id))
          }
          className="rounded-full bg-black p-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <X className="h-4 w-4" />
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <>
      <TopCards topCards={topCards} />
      <div className="bg-white mt-4 p-2">
        <h2 className="font-bold text-xl">New Sale</h2>
        <hr />

        <div className="flex flex-col lg:flex-row">
          {/* left side */}
          <div className="w-full lg:w-8/12 mr-4">
            {/* top options */}
            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-between items-center flex-wrap">
              {/* Datepicker */}
              <div className="customDatePickerWidth md:w-[203px]">
                <DatePicker
                  className="h-[2.33rem] w-full p-3 rounded-md border border-black/30"
                  placeholderText="Select a Date"
                  selected={startDate}
                  isClearable
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              {/* Category Selector */}
              <div className="w-full md:w-[203px]">
                <Select
                  defaultValue={selectedOption}
                  onChange={({ value }) => {
                    setTableData([
                      ...tableData,
                      { ...value, id: new Date().toString() },
                    ]);
                  }}
                  options={tableDataTest.map((item) => {
                    return {
                      label: item.name,
                      value: item,
                    };
                  })}
                  placeholder="Select an category"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "6px",
                    }),
                  }}
                />
              </div>

              {/* Category Selector */}
              <div className="w-full md:w-[203px]">
                <Select
                  defaultValue={selectedOption}
                  onChange={({ value }) => {
                    setTableData([
                      ...tableData,
                      { ...value, id: new Date().toString() },
                    ]);
                  }}
                  options={tableDataTest.map((item) => {
                    return {
                      label: item.name,
                      value: item,
                    };
                  })}
                  placeholder="Select an product"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "6px",
                    }),
                  }}
                />
              </div>
            </div>

            {/* barcode input */}
            <div>
              <input
                className="flex mt-4 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-center"
                type="text"
                name="barcode"
                placeholder="Enter barcode, hsn number"
                id="barcode"
              ></input>
            </div>

            {/* table */}
            <div className="mt-10">
              <DataTable
                highlightOnHover
                pagination
                data={tableData}
                columns={columns}
                responsive={true}
              />
            </div>

            {/* form */}
            <div className="mt-4 text-right space-y-3 border p-2 rounded-md">
              <div className="flex flex-row flex-wrap gap-4 mt-2 justify-center">
                {["Cash Sale", "Credit Sale"].map((name, idx) => (
                  <div
                    key={idx}
                    className={`flex p-4 space-x-4 rounded-md md:space-x-6 bg-white shadow-md text-gray-800 capitalize ${
                      name === saleType
                        ? "border-blue-500"
                        : "border-transparent"
                    } hover:border-blue-500 border duration-150 transition-colors cursor-pointer`}
                    onClick={() => setSaleType(name)}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* customer name */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="customer_name"
                >
                  Customer Name:
                </label>
                {saleType === "Cash Sale" ? (
                  <input
                    className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Customer Name"
                    id="customer_name"
                  ></input>
                ) : (
                  <select
                    className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="user_role"
                    name="user_role"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select User
                    </option>
                    <option value="user 1">User 1</option>
                    <option value="user 2">User 2</option>
                    <option value="user 3">User 3</option>
                    <option value="user 4">User 4</option>
                  </select>
                )}
              </div>

              {/* mobile number */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="mobile_number"
                >
                  Mobile Number:
                </label>
                <input
                  className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="tel"
                  placeholder="Mobile Number"
                  id="mobile_number"
                  disabled={saleType !== "Cash Sale"}
                ></input>
              </div>

              {/* Address */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="address"
                >
                  Address:
                </label>
                <textarea
                  className="flex w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Address"
                  id="address"
                  rows="4"
                  disabled={saleType !== "Cash Sale"}
                ></textarea>
              </div>

              {/* Description */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  className="flex w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Description"
                  id="description"
                  rows="4"
                ></textarea>
              </div>

              {/* customer sms */}
              <div className="flex items-center flex-row ml-16">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="customer_sms"
                    className="text-base font-medium text-gray-900"
                  >
                    Customer SMS:
                  </label>
                </div>
                <div className="ml-2">
                  <input type="checkbox" id="customer_sms" />
                </div>
              </div>

              {/* owner sms */}
              <div className="flex items-center flex-row ml-[5.5rem]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="owner_sms"
                    className="text-base font-medium text-gray-900"
                  >
                    Owner SMS:
                  </label>
                </div>
                <div className="ml-2">
                  <input type="checkbox" id="owner_sms" />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
            <div className="lg:grid-cols-2 hidden lg:grid gap-4">
              {tableData.map((item, idx) => (
                <div
                  className="p-2 shadow-md rounded-md cursor-pointer"
                  key={idx}
                >
                  <img
                    src="https://t3.ftcdn.net/jpg/00/56/01/00/360_F_56010077_UA98ADMw95rEB2hCuAlFOJkjdirrAAPV.jpg"
                    alt="Product Image"
                  />
                  <p className="text-center">{item.name}</p>
                </div>
              ))}
            </div>

            {/* 2nd form */}
            <div className="mt-4 text-right space-y-3 border p-2 rounded-md">
              {/* total quantity */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="total_quantity"
                >
                  Total Quantity:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Total Quantity"
                  defaultValue={0}
                  id="total_quantity"
                  disabled={true}
                ></input>
              </div>

              {/* total amount */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="total_amount"
                >
                  Total Amount:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Total Amount"
                  defaultValue={0}
                  id="total_amount"
                  disabled={true}
                ></input>
              </div>

              {/* total discount */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="total_discount2"
                >
                  Total Amount:
                </label>
                <div className="w-4/5 lg:w-3/5 flex gap-2">
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={0}
                    id="total_discount1"
                    disabled={true}
                  />
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={0}
                    id="total_discount2"
                  />
                </div>
              </div>

              {/* transport const */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="transport_const"
                >
                  Transport Cost:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Transport Cost"
                  defaultValue={0}
                  id="transport_const"
                ></input>
              </div>

              {/* labour const */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="labour_const"
                >
                  Labour Cost:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Labour Cost"
                  defaultValue={0}
                  id="labour_const"
                ></input>
              </div>

              {/* grand total */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="grand_total"
                >
                  Grand Total:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Grand Total"
                  defaultValue={0}
                  id="grand_total"
                  disabled={true}
                ></input>
              </div>

              {/* previous balance */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="paid1"
                >
                  Previous Balance:
                </label>
                <div className="w-4/5 lg:w-3/5 flex gap-2">
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={0}
                    id="previous_balance1"
                    disabled={true}
                  />
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={"Received"}
                    id="previous_balance2"
                    disabled={true}
                  />
                </div>
              </div>

              {/* paid */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="paid1"
                >
                  Paid:
                </label>
                <div className="w-4/5 lg:w-3/5 flex gap-2">
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={0}
                    id="paid1"
                  />
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="paid2"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Payment
                    </option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                  </select>
                </div>
              </div>

              {/* current balance */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="current_balance1"
                >
                  Current Balance:
                </label>
                <div className="w-4/5 lg:w-3/5 flex gap-2">
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={0}
                    id="current_balance1"
                    disabled={true}
                  />
                  <input
                    className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    defaultValue={"Received"}
                    id="current_balance2"
                    disabled={true}
                  />
                </div>
              </div>

              {/* save button */}
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSales;
