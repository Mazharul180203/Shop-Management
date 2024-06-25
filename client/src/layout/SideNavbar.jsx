import React, {useState} from 'react';
import {Layout} from 'antd'
import Logo from "./Logo.jsx";
import MenuList from "./MenuList.jsx";
import ToggleThemeButton from "./ToggleThemeButton.jsx";

const {Header,Sider} = Layout

const SideNavbar = () => {
    const [darkTheme,setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <Layout>
            <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar">
                <Logo />
                <MenuList darkTheme = {darkTheme}/>
                <ToggleThemeButton darkTheme={darkTheme}
                toggleTheme={toggleTheme}/>
            </Sider>
        </Layout>
    );
};

export default SideNavbar;
