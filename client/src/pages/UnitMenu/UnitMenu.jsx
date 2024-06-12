import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add Unit",
    to: "/unitmenu/add-unit",
  },
  {
    text: "View All",
    to: "/unitmenu/view-all",
  },
];

const UnitMenu = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default UnitMenu;
