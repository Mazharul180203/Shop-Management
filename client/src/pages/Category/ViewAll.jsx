import { Pencil, Printer, Trash2 } from "lucide-react";
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

const ViewAll = () => {
  const columns = [
    {
      name: "SL",
      selector: (row) => row.sl,
      width: "50px",
    },
    {
      name: "Category",
      selector: (row) => row.name,
    },

    {
      name: "Action",
      width: "100px",
      selector: (row) => (
        <div className="space-x-2">
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
          <h2 className="font-bold text-xl">All Category</h2>
          <div className="flex gap-2 p-2 border mb-1 rounded-md cursor-pointer">
            <span>Print</span>
            <Printer />
          </div>
        </div>
        <hr />
      </div>

      <div className="w-full md:w-1/3 mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="search"
          placeholder="Search here..."
        ></input>
      </div>

      {/* table */}
      <div className="mt-2 border rounded-md">
        <DataTable
          highlightOnHover
          pagination
          data={tableData}
          columns={columns}
        />
      </div>
    </>
  );
};

export default ViewAll;
