import React from 'react';
import{ Menu } from 'antd';
import {NavLink} from "react-router-dom";
import {AppstoreAddOutlined, BarsOutlined, HomeOutlined,} from '@ant-design/icons';

const MenuList = ({darkTheme}) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className='menu-bar'>
            <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink>
            </Menu.Item>

            <Menu.SubMenu key="category" icon={<BarsOutlined />} title="Category">
                <Menu.Item key="all_new">
                    <NavLink to="/category/addNew" className={({ isActive }) => isActive ? "active-link" : ""}>All New</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/category/viewAll" className={({ isActive }) => isActive ? "active-link" : ""}>View All</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="brand" icon={<BarsOutlined />} title="Brand">
                <Menu.Item key="all_new">
                    <NavLink to="/brand/addNew" className={({ isActive }) => isActive ? "active-link" : ""}>All New</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/brand/viewAll" className={({ isActive }) => isActive ? "active-link" : ""}>View All</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="product" icon={<BarsOutlined />} title="Product">
                <Menu.Item key="all_new">
                    <NavLink to="/product/addProduct" className={({ isActive }) => isActive ? "active-link" : ""}>Add Product</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/product/allProduct" className={({ isActive }) => isActive ? "active-link" : ""}>All Product</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="supplier" icon={<BarsOutlined />} title="Supplier">
                <Menu.Item key="all_new">
                    <NavLink to="/supplier/addSupplier" className={({ isActive }) => isActive ? "active-link" : ""}>Add Supplier</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/supplier/allSupplier" className={({ isActive }) => isActive ? "active-link" : ""}>All Supplier</NavLink>
                </Menu.Item>
                <Menu.Item key="all_new">
                    <NavLink to="/supplier/addTransaction" className={({ isActive }) => isActive ? "active-link" : ""}>Add Transaction</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/supplier/allTransaction" className={({ isActive }) => isActive ? "active-link" : ""}>All Transaction</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="purchaseItem" icon={<BarsOutlined />} title="PurchaseItems">
                <Menu.Item key="all_new">
                    <NavLink to="/purchaseitems/newPurchase" className={({ isActive }) => isActive ? "active-link" : ""}>New Purchase</NavLink>
                </Menu.Item>
                <Menu.Item key="task 2">
                    <NavLink to="/purchaseitems/allPurchase" className={({ isActive }) => isActive ? "active-link" : ""}>All Purchase</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

export default MenuList;
