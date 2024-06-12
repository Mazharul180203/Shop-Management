import { ArrowRight, Eye, Pencil, Printer, Trash2 } from "lucide-react";
import DataTable from "react-data-table-component";

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

const AllSupplier = () => {
  const columns = [
    {
      name: "SL",
      selector: (row) => row.sl,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "120px",
    },
    {
      name: "Contact Person",
      selector: (row) => <p className="">{row.name}</p>,
      width: "130px",
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      width: "120px",
    },
    {
      name: "Receivable",
      selector: (row) => 0,
    },
    {
      name: "Payable",
      selector: (row) => 0,
    },
    {
      name: "Status",
      selector: (row) => "Active",
    },
    {
      name: "Action",
      width: "150px",
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
        {/* heading */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">View All Supplier</h2>
          <div className="flex gap-2 p-2 border mb-1 rounded-md cursor-pointer">
            <span>Print</span>
            <Printer />
          </div>
        </div>
        <hr />

        {/* select supplier */}
        <div className="mt-6 flex flex-row w-full gap-2 items-center">
          <div className="flex items-center justify-between mt-2">
            <label
              className="text-md mr-2 font-medium text-gray-900"
              htmlFor="supplier"
            >
              {" "}
              Supplier:{" "}
            </label>
          </div>
          <div className="mt-2 flex-1">
            <select
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
          <div>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-black px-3 py-[10px] mt-[6px] text-sm font-semibold text-white hover:bg-black/80"
            >
              Show
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* table */}
        <div className="mt-10 border rounded-md">
          <DataTable
            highlightOnHover
            pagination
            data={tableData}
            columns={columns}
            responsive={true}
            dense
          />
        </div>
      </div>
    </>
  );
};

export default AllSupplier;
