import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/create">Create</Link></Menu.Item>
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
