import {Boxes, CircleArrowRight, CirclePlus, CopyPlus, CreditCard, Eye, Hexagon, Layers, Layers2, LayoutDashboard,
  PackageOpen, PackagePlus, Settings, User,} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ListDropdown from "./ListDropdown";

const listdatas = [
  {
    sectionName: "dashboard",
    sectionTo: "/",
    sectionIcon: <LayoutDashboard />,
  },
  {
    sectionName: "category",
    sectionTo: "/",
    sectionIcon: <Layers />,
    lists: [
      {
        name: "Add New",
        to: "/category/add-new",
        icon: <CirclePlus />,
      },
      {
        name: "View All",
        to: "/category/view-all",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "sub category",
    sectionTo: "/",
    sectionIcon: <Layers2 />,
    lists: [
      {
        name: "Add New",
        to: "/subcategory/add-new",
        icon: <CirclePlus />,
      },
      {
        name: "View All",
        to: "/subcategory/view-all",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "Brand",
    sectionTo: "/",
    sectionIcon: <Hexagon />,
    lists: [
      {
        name: "Add New",
        to: "/brand/add-new",
        icon: <CirclePlus />,
      },
      {
        name: "View All",
        to: "/brand/view-all",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "Unit Menu",
    sectionTo: "/",
    sectionIcon: <Boxes />,
    lists: [
      {
        name: "Add Unit",
        to: "/unitmenu/add-unit",
        icon: <PackagePlus />,
      },
      {
        name: "View All",
        to: "/unitmenu/view-all",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "Product",
    sectionTo: "/",
    sectionIcon: <PackageOpen />,
    lists: [
      {
        name: "Add Product",
        to: "/product/add-product",
        icon: <CopyPlus />,
      },
      {
        name: "All Product",
        to: "/product/all-product",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "Supplier",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "Add Supplier",
        to: "/supplier/add-supplier",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Supplier",
        to: "/supplier/all-supplier",
        icon: <CircleArrowRight />,
      },
      {
        name: "Add Transaction",
        to: "/supplier/add-transaction",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Transaction",
        to: "/supplier/all-transaction",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Customer",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "Client Type",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "New Customer",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Customer",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Customer Payment",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Customer Payment",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Payment Reminder",
    sectionTo: "/",
    sectionIcon: <CreditCard />,
    lists: [
      {
        name: "Add New",
        to: "/add-product",
        icon: <CopyPlus />,
      },
      {
        name: "View All",
        to: "/view-all",
        icon: <Eye />,
      },
    ],
  },
  {
    sectionName: "Purchase",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "New Purchase",
        to: "/purchase/new-purchase",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Purchase",
        to: "/purchase/all-purchase",
        icon: <CircleArrowRight />,
      },
      {
        name: "Add Pre-Order",
        to: "/purchase/add-pre-order",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Pre-Order",
        to: "/purchase/all-pre-order",
        icon: <CircleArrowRight />,
      },
      {
        name: "Item Wise",
        to: "/purchase/item-wise",
        icon: <CircleArrowRight />,
      },
      {
        name: "Add Purchase Return",
        to: "/purchase/add-purchase-return",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Purchase Return",
        to: "/purchase/all-purchase-return",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Stock Menu",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
  },
  {
    sectionName: "Sale Menu",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "New Sales",
        to: "/new-sale",
        icon: <CircleArrowRight />,
      },
      {
        name: "View All",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "View Item Wise",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "View Client Wise",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "Sale Return",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "All Sale Return",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Due Menu",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "Cash Due",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Credit Due",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Supplier Due",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Bank Menu",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
  },
  {
    sectionName: "Loan",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
  },
  {
    sectionName: "Ledger",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "Suppliers Ledger",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Customers Ledger",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "Report",
    sectionTo: "/",
    sectionIcon: <CircleArrowRight />,
    lists: [
      {
        name: "Purchase Report",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Sales Report",
        to: "/add-product",
        icon: <CircleArrowRight />,
      },
      {
        name: "Income Report",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "Cost Report",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "Profit / Loss",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "Cat Profit / Loss",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
      {
        name: "Cash Book",
        to: "/view-all",
        icon: <CircleArrowRight />,
      },
    ],
  },
  {
    sectionName: "User Role",
    sectionTo: "/",
    sectionIcon: <User />,
  },
  {
    sectionName: "Settings",
    sectionTo: "/",
    sectionIcon: <Settings />,
  },
];

export default function Sidebar({ openSidebar }) {
  return (
    <AnimatePresence>
      {openSidebar && (
        <motion.aside
          initial={{ x: "-100%", display: "none" }}
          animate={{ x: openSidebar ? 0 : "-100%", display: "block" }}
          exit={{ x: "-100%", display: "none" }}
          transition={{ duration: 0.1 }}
          className="flex min-h-full min-w-64 flex-col overflow-y-auto border-r bg-white px-5 py-2"
        >
          <div className="flex flex-1 flex-col justify-between">
            <nav className="-mx-3">
              {listdatas.map((listdata, idx) => (
                <ListDropdown key={idx} listdata={listdata} />
              ))}
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
