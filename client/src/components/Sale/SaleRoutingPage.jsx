import React from 'react';
import Directory from "../../pages/CommonDirectory/Directory.jsx";

const SaleRoutingPage = () => {
    const data = [
        {
            to:'/sale/addSale',
            text:'Add Sale'
        },
        {
            to:'/sale/allSale',
            text:'All Sale'
        },
    ]
    return (
        <div>
            <Directory pages={data}/>
        </div>
    );
};

export default SaleRoutingPage;