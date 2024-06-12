import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "New Purchase",
    to: "/purchase/new-purchase",
  },
  {
    text: "All Purchase",
    to: "/purchase/all-purchase",
  },
  {
    text: "Add Pre-Order",
    to: "/purchase/add-pre-order",
  },
  {
    text: "All Pre-Order",
    to: "/purchase/all-pre-order",
  },
  {
    text: "Item Wise",
    to: "/purchase/item-wise",
  },
  {
    text: "Add Purchase Return",
    to: "/purchase/add-purchase-return",
  },
  {
    text: "All Purchase Return",
    to: "/purchase/all-purchase-return",
  },
];

const Purchase = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Purchase;
