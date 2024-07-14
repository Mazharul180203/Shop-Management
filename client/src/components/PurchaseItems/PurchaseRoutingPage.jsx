import React from 'react';
import Directory from "../../pages/CommonDirectory/Directory.jsx";

const PurchaseRoutingPage = () => {
    const data = [
        {
            to:'/purchaseitems/newPurchase',
            text:'New Purchase'
        },
        {
            to:'/purchaseitems/allPurchase',
            text:'New Purchase'
        }
    ]
    return (
        <div>
            <Directory pages={data}/>
        </div>
    );
};

export default PurchaseRoutingPage;