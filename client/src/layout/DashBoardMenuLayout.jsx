import { Link, Outlet, useLocation } from "react-router-dom";

const DashBoardMenuLayout = ({ pages }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 mt-2">
        {pages.map((page, idx) => (
          <Link
            to={page.to}
            key={idx}
            className={`flex px-4 py-2 space-x-4 rounded-md md:space-x-6 bg-white shadow-md text-gray-800 capitalize ${
              pathname === page.to ? "border-blue-500" : "border-transparent"
            } hover:border-blue-500 border duration-150 transition-colors cursor-pointer`}
          >
            {page.text}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardMenuLayout;
