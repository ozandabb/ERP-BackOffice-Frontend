import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Typography, Avatar, Menu, Breadcrumb } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

class ViewOrders extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ background: "#1E90FF", padding: "20px" }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          <Title style={{ color: "#ffffff" }} level={4}>
            BackOffice Management System
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "white" }}>
            <Menu defaultOpenKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">
                <Link to="/backoffice/backOfficeDashboard">
                  <span>
                    <AppstoreOutlined />
                    <span>Dashboard</span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="Orders">
                <span>
                  <MailOutlined />
                  <span>Orders</span>
                </span>
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <SettingOutlined />
                    <span>Other Options</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="other" title="Others">
                  <Menu.Item key="other01">Dummy data 01</Menu.Item>
                  <Menu.Item key="other02">Dummy data 02</Menu.Item>
                  <Menu.Item key="other03">Dummy data 03</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "5px 40px 0" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Orders</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "white", padding: 24, minHeight: 560 }}>
                <h1>Oders View</h1>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              ©2020 Designed and Developed by xUnit Labs Solutions
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(ViewOrders);
