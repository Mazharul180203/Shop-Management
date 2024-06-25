import React from 'react';
import{ Menu } from 'antd';
import {
    AppstoreAddOutlined,
    AreaChartOutlined, BarsOutlined,
    HomeOutlined,
    PayCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
const MenuList = () => {
    return (
        <Menu theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="activity" icon={<AppstoreAddOutlined />}>
                Activity
            </Menu.Item>
            <Menu.SubMenu key="subtasks" icon={<BarsOutlined/>} title="Tasks">
                <Menu.Item key="task 1"> Task 1</Menu.Item>
                <Menu.Item key="task 2"> Task 2</Menu.Item>
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