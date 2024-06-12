import DashBoardMenuLayout from "../../layout/DashBoardMenuLayout";

const pages = [
  {
    text: "Add Product",
    to: "/product/add-product",
  },
  {
    text: "All Product",
    to: "/product/all-product",
  },
];

const Product = () => {
  return (
    <>
      <DashBoardMenuLayout pages={pages} />
    </>
  );
};

export default Product;
