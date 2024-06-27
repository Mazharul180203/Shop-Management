import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../pages/Autentication/SignupPage.jsx";
import SignInPage from "../pages/Autentication/SignInPage.jsx";


const Webroute = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Webroute;