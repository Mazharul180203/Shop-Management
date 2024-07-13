import React from 'react';
import SupplierRoutingPage from "./SupplierRoutingPage.jsx";
import SideNavbar from "../../layout/SideNavbar.jsx";
import AllSupplierPage from "../../pages/Supplier/AllSupplierPage.jsx";

const AllSupplier = () => {
    return (
        <SideNavbar>
            <SupplierRoutingPage/>
            <AllSupplierPage/>
        </SideNavbar>
    );
};

export default AllSupplier;