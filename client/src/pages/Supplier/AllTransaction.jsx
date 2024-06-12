import { ArrowRight, Eye, Pencil, Printer, Trash2 } from "lucide-react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ReactDatePicker from "react-datepicker";

const tableData = [
  {
    sl: 1,
    name: "acnalsknc",
    id: "2131",
    mobile: "1231231",
    description: "asclancjans akjscnaosnckasc",
    address: "asclancjans akjscnaosnckasc",
    due: "asclancjans akjscnaosnckasc",
  },
  {
    sl: 2,
    name: "acnalsknc",
    id: "2139231",
    mobile: "1231231",
    description: "asclancjans akjscnaosnckasc",
    address: "asclancjans akjscnaosnckasc",
    due: "asclancjans akjscnaosnckasc",
  },
];

const AllTransaction = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const columns = [
    {
      name: "SL",
      selector: (row) => row.sl,
      width: "50px",
    },
    {
      name: "Date",
      selector: (row) => "2024-05-29",
      width: "100px",
      wrap: true,
      whiteSpace: "break-spaces",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "120px",
    },
    {
      name: (
        <p>
          Transaction <br /> By
        </p>
      ),
      selector: (row) => <p className="">Cash</p>,
      width: "130px",
      wrap: true,
    },

    {
      name: "Paid",
      selector: (row) => 12000000,
      width: "130px",
      wrap: true,
    },
    {
      name: "Receive",
      selector: (row) => 0,
      width: "120px",
    },
    {
      name: "Paid By",
      selector: (row) => row.description,
      wrap: true,
    },
    {
      name: "Username",
      selector: (row) => "asdqw212",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="space-x-2">
          <button
            type="button"
            className="rounded-md bg-green-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-md bg-yellow-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-md bg-red-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white mt-4 p-2">
        {/* heading 1 */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">View All Transactions</h2>
        </div>
        <hr />

        {/* top options */}
        <div className="flex flex-col lg:flex-row gap-3 items-center mt-2">
          {/* select supplier */}
          <div className="flex-1 w-[205px]">
            <select
              className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="supplier"
              name="supplier"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Supplier
              </option>
              <option value="supplier1">Supplier 1</option>
              <option value="supplier2">Supplier 2</option>
              <option value="supplier3">Supplier 3</option>
              <option value="supplier4">Supplier 4</option>
              <option value="supplier5">Supplier 5</option>
            </select>
          </div>

          {/* Start Datepicker */}
          <div>
            <ReactDatePicker
              className="h-[2.33rem] p-3 rounded-md border border-black/30"
              placeholderText="from"
              selected={startDate}
              isClearable
              onChange={(date) => setStartDate(date)}
            />
          </div>

          {/* End Datepicker */}
          <div>
            <ReactDatePicker
              className="h-[2.33rem] p-3 rounded-md border border-black/30"
              placeholderText="to"
              selected={endDate}
              isClearable
              onChange={(date) => setEndDate(date)}
            />
          </div>

          {/* show button */}
          <div>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-black px-3 py-[8px] text-sm font-semibold text-white hover:bg-black/80"
            >
              Show
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* heading */}
        <div className="flex flex-row items-center justify-between mt-12 border-t border-b">
          <h2 className="font-bold text-xl">Show Results</h2>
          <div className="flex gap-2 p-2 border my-1 rounded-md cursor-pointer">
            <span>Print</span>
            <Printer />
          </div>
        </div>

        {/* table */}
        <div className="mt-2 border rounded-md">
          {/* <DataTable
            highlightOnHover
            pagination
            data={tableData}
            columns={columns}
          /> */}

          <table className="border w-full">
            <thead>
              <tr>
                <th className="border p-1">SL</th>
                <th className="border p-1">Date</th>
                <th className="border p-1">Name</th>
                <th className="border p-1">Transaction By</th>
                <th className="border p-1">Paid</th>
                <th className="border p-1">Receive</th>
                <th className="border p-1">Paid By</th>
                <th className="border p-1">Username</th>
                <th className="border p-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className="border p-1">{item.sl}</td>
                  <td className="border p-1">{item.name}</td>
                  <td className="border p-1">{item.id}</td>
                  <td className="border p-1">{item.mobile}</td>
                  <td className="border p-1">{12333}</td>
                  <td className="border p-1">{0}</td>
                  <td className="border p-1">{item.due}</td>
                  <td className="border p-1">csncla121</td>
                  <td className="border p-1">
                    <div className="space-x-2">
                      <button
                        type="button"
                        className="rounded-md bg-green-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-yellow-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-red-600 p-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="border p-1 text-right font-bold" colSpan={4}>Total: </td>
                <td className="border p-1 font-bold">{12333*2} TK</td>
                <td className="border p-1 font-bold">{0} TK</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllTransaction;
