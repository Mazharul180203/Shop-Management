import React from 'react';
import{ Menu } from 'antd';
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
            <Menu.Item key="category" icon={<HomeOutlined />}>
                Category
            </Menu.Item>
            <Menu.Item key="subcategory" icon={<AppstoreAddOutlined />}>
                Subcategory
            </Menu.Item>
            <Menu.Item key="brand" icon={<AppstoreAddOutlined />}>
                Brand
            </Menu.Item>
            <Menu.Item key="unitMenu" icon={<AppstoreAddOutlined />}>
                Unit Menu
            </Menu.Item>
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