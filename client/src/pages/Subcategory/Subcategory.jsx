import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add New",
    to: "/subcategory/add-new",
  },
  {
    text: "View All",
    to: "/subcategory/view-all",
  },
];

const Subcategory = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Subcategory;
