import React from 'react';
import{ Menu } from 'antd';
import {NavLink} from "react-router-dom";
import {
    AppstoreAddOutlined,
    AreaChartOutlined, BarsOutlined,
    HomeOutlined,
    PayCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';


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
            <Menu.Item key="product" icon={<AppstoreAddOutlined />}>
                Product
            </Menu.Item>
            <Menu.Item key="supplier" icon={<AppstoreAddOutlined />}>
                Supplier
            </Menu.Item>
            <Menu.Item key="customer" icon={<AppstoreAddOutlined />}>
                Customer
            </Menu.Item>
            <Menu.Item key="paymentReminder" icon={<AppstoreAddOutlined />}>
                Payment Reminder
            </Menu.Item>
            <Menu.Item key="purchase" icon={<AppstoreAddOutlined />}>
                Purchase
            </Menu.Item>
            <Menu.Item key="stockMenu" icon={<AppstoreAddOutlined />}>
                Stock Menu
            </Menu.Item>
            <Menu.Item key="saleMenu" icon={<AppstoreAddOutlined />}>
                Sale Menu
            </Menu.Item>
            <Menu.Item key="dueMenu" icon={<AppstoreAddOutlined />}>
                Due Menu
            </Menu.Item>
            <Menu.Item key="Ledger" icon={<AppstoreAddOutlined />}>
                Ledger
            </Menu.Item>
            <Menu.SubMenu key="subtasks 1" icon={<BarsOutlined />} title="Tasks">
                <Menu.Item key="task 1"> Task 1</Menu.Item>
                <Menu.Item key="task 2"> Task 2</Menu.Item>
                <Menu.SubMenu key="subtasks 2" icon={<BarsOutlined />} title="SubTask">
                    <Menu.Item key="Subtask 1"> Task 1</Menu.Item>
                    <Menu.Item key="Subtask 2"> Task 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="progress" icon={<AreaChartOutlined />}>
                Progress
            </Menu.Item>
            <Menu.Item key="payment" icon={<PayCircleOutlined />}>
                Payment
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;