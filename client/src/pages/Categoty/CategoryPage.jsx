import React from 'react';
import SideNavbar from "../../layout/SideNavbar.jsx";
import AddNewCategoryPage from "./AddNewCategoryPage.jsx";

const CategoryPage = () => {
    return (
        <SideNavbar>
            <AddNewCategoryPage/>
        </SideNavbar>
    );
};

export default CategoryPage;