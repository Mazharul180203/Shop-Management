import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add Supplier",
    to: "/supplier/add-supplier",
  },
  {
    text: "All Supplier",
    to: "/supplier/all-supplier",
  },
  {
    text: "Add Transaction",
    to: "/supplier/add-transaction",
  },
  {
    text: "All Transaction",
    to: "/supplier/all-transaction",
  },
];

const Supplier = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Supplier;
