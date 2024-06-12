import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // adjusting navbar by the window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenSidebar(false);
      } 
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <div className="flex">
        <div className="sticky">
          <Sidebar openSidebar={openSidebar} />
        </div>
        <div className="px-4 py-2 sm:px-6 lg:px-8 bg-slate-50 w-[100%] min-h-[100vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
