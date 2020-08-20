import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const CustomLayout = (props) => {
    return (

        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/create">Create Report</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/report">Report Summary</Link></Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>

        </Layout>
    );
}

export default CustomLayout;
