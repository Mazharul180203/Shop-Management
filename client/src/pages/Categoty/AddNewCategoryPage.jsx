import React, {useState} from 'react';
import Directory from "../CommonDirectory/Directory.jsx";

const AddNewCategoryPage = () => {
   const data = [
       {
           to:'/',
           text:'Add New'
       },
       {
           to:'/',
           text:'View All'
       },
   ]
    return (
        <Directory pages={data}/>
    );
};

export default AddNewCategoryPage;