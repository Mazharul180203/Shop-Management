import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../pages/Autentication/SignupPage.jsx";
import SignInPage from "../pages/Autentication/SignInPage.jsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.jsx";
import ValidationHelper from "../utilitiy/ValidationUtlity.js";


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
                </Routes>
            </BrowserRouter>
            )
    }
};

export default Webroute;