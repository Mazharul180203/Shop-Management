import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add New",
    to: "/brand/add-new",
  },
  {
    text: "View All",
    to: "/brand/view-all",
  },
];

const Brand = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Brand;
