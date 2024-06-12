import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add New",
    to: "/category/add-new",
  },
  {
    text: "View All",
    to: "/category/view-all",
  },
];

const Category = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Category;
