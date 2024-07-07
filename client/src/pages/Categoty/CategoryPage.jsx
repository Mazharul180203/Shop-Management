import React from 'react';
import SideNavbar from "../../layout/SideNavbar.jsx";
import AddNewCategoryPage from "./AddNewCategoryPage.jsx";
import CategoryRoutingPage from "../../components/Categoty/CategoryRoutingPage.jsx";

const CategoryPage = () => {
    return (
        <SideNavbar>
            <CategoryRoutingPage/>
        </SideNavbar>
    );
};

export default CategoryPage;