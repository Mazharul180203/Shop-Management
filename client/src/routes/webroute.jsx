import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../pages/Autentication/SignupPage.jsx";
import SignInPage from "../pages/Autentication/SignInPage.jsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.jsx";
import ValidationHelper from "../utilitiy/ValidationUtlity.js";
import AddNewCategory from "../components/Categoty/AddNewCategory.jsx";
import ViewAllCategory from "../components/Categoty/ViewAllCategory.jsx";
import CategoryPage from "../pages/Categoty/CategoryPage.jsx";
import BrandPage from "../pages/Brand/BrandPage.jsx";
import AddNewBrand from "../components/Brand/AddNewBrand.jsx";
import ViewAllBrand from "../components/Brand/ViewAllBrand.jsx";


const Webroute = () => {
    if(!ValidationHelper.isLogin()){
        return(
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<SignInPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                </Routes>
            </BrowserRouter>
            );

    }else{
        return(
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<DashboardPage/>}/>
                    <Route path="/category" element={<CategoryPage/>}/>
                    <Route path="/category/addNew" element={<AddNewCategory/>}/>
                    <Route path="/category/viewAll" element={<ViewAllCategory/>}/>
                    <Route path="/brand" element={<BrandPage/>}/>
                    <Route path="/brand/addNew" element={<AddNewBrand/>}/>
                    <Route path="/brand/viewAll" element={<ViewAllBrand/>}/>
                </Routes>
            </BrowserRouter>
            )
    }
};

export default Webroute;