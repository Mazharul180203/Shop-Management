import { useState } from "react";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DataTable from "react-data-table-component";
import SaleInput from "../../components/SaleInput";
import { ArrowRight, X } from "lucide-react";

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

const NewPurchase = () => {
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
      name: "Product",
      selector: (row) => row.name,
      width: "150px",
      warp: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      width: "150px",
      warp: true,
    },
    {
      name: (
        <p>
          Purchase <br /> Price
        </p>
      ),
      selector: (row) => 0,
      width: "100px",
      warp: true,
    },
    {
      name: "Quantity",
      selector: (row) => <p className="text-xl">{row.stock}</p>,
      width: "`120px",
      warp: true,
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
      width: "100px",
    },
    {
      name: "Total",
      selector: (row) => 0,
      width: "100px",
      warp: true,
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
      <div className="bg-white mt-4 p-2">
        <h2 className="font-bold text-xl">New Purchase</h2>
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

            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-between items-center flex-wrap">
              {/* barcode input */}
              <div className="w-full md:w-[203px]">
                <input
                  className="flex mt-4 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-center"
                  type="text"
                  name="barcode"
                  placeholder="Enter barcode, hsn number"
                  id="barcode"
                />
              </div>

              {/* voucher no */}
              <div className="w-full md:w-[203px]">
                <input
                  className="flex mt-4 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-center"
                  type="text"
                  name="voucher_no"
                  placeholder="Voucher No"
                  id="voucher_no"
                />
              </div>

              {/* supplier name */}
              <div className="w-full md:w-[203px]">
                <Select
                  defaultValue={selectedOption}
                  options={tableDataTest.map((item) => {
                    return {
                      label: item.name,
                      value: item,
                    };
                  })}
                  placeholder="Supplier Name"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "6px",
                    }),
                  }}
                />
              </div>
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
              {/* total */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="total"
                >
                  Total:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Total"
                  defaultValue={0}
                  id="total"
                  disabled={true}
                ></input>
              </div>

              {/* total discount */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 lg:w-2/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="total_discount"
                >
                  Total Discount:
                </label>
                <input
                  className="flex h-10 w-4/5 lg:w-3/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Total Discount"
                  defaultValue={0}
                  id="total_discount"
                ></input>
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
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPurchase;
