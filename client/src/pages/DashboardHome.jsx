import DataTable from "react-data-table-component";
import { BadgeDollarSign, Percent, Printer, ShoppingCart } from "lucide-react";
import TopCards from "../components/TopCards";

const cardData = [
  {
    text: "purchase amount",
    amount: 20000,
    icon: <ShoppingCart />,
  },
  {
    text: "sales amount",
    amount: 20000,
    icon: <Percent />,
  },
  {
    text: "customer due",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "invoice receive",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "supply pament",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "bank debit",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "payment receive",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "bank credit",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "expeniture",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
  {
    text: "earnings",
    amount: 20000,
    icon: <BadgeDollarSign />,
  },
];

const topCards = [
  "purchase menu",
  "supply pament",
  "stock menu",
  "sales menu",
  "customer collection",
  "expeniture",
  "daily sheet",
];

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

const DashboardHome = () => {
  const columns1 = [
    {
      name: "SL",
      selector: (row) => row.sl,
      width: "50px",
    },
    {
      name: "Client Name",
      selector: (row) => row.name,
      width: "120px",
    },
    {
      name: "Client Id",
      selector: (row) => row.id,
      width: "120px",
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      width: "120px",
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Due Amount",
      selector: (row) => row.due,
    },
  ];

  const columns2 = [
    {
      name: "SL",
      selector: (row) => row.sl,
      width: "50px",
    },
    {
      name: "Bank Name",
      selector: (row) => row.name,
      width: "120px",
    },
    {
      name: "Branch Name",
      selector: (row) => row.id,
      width: "120px",
    },
    {
      name: "Cheque Number",
      selector: (row) => row.mobile,
    },
    {
      name: "Amount",
      selector: (row) => row.description,
    },
    {
      name: "Money Receipt",
      selector: (row) => row.address,
    },
    {
      name: "Get Pass",
      selector: (row) => row.due,
    },
  ];

  return (
    <>
      <TopCards topCards={topCards} />

      {/* Card Overview Section */}
      <div className="mt-10">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow-md text-gray-800 border-transparent hover:border-blue-500 border duration-150 transition-colors"
            >
              <div className="flex justify-center p-2 items-center rounded-lg sm:p-4 bg-blue-600">
                <span className=" text-white">{card?.icon}</span>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold">{card.amount}</p>
                <p className="capitalize text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <DataTable
          highlightOnHover
          pagination
          data={tableData}
          columns={columns1}
          fixedHeader
          subHeader={true}
          responsive={true}
          dense
          subHeaderComponent={
            <div className="flex justify-between w-full">
              <span className="font-semibold text-xl">
                Today Payment Reminder
              </span>
              <Printer className="cursor-pointer" />
            </div>
          }
        />
      </div>

      <div className="mt-10">
        <DataTable
          highlightOnHover
          pagination
          data={tableData}
          columns={columns2}
          fixedHeader
          subHeader={true}
          responsive={true}
          dense
          subHeaderComponent={
            <div className="flex justify-between w-full">
              <span className="font-semibold text-xl">
                Bank Cheque Pass List
              </span>
              <Printer className="cursor-pointer" />
            </div>
          }
        />
      </div>
    </>
  );
};

export default DashboardHome;
