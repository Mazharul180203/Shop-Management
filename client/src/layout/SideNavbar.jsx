import React from 'react';
import {Layout} from 'antd'
import Logo from "./Logo.jsx";
import MenuList from "./MenuList.jsx";

const {Header,Sider} = Layout

const SideNavbar = () => {
    return (
        <Layout>
            <Sider className="sidebar">
                <Logo />
                <MenuList />
            </Sider>
        </Layout>
    );
};

export default SideNavbar;
