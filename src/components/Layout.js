import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div className="logo" style={{ float: "left", marginRight: 20 }}>
          <Title level={3} style={{ margin: 0, color: "white" }}>
            Aaron
          </Title>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to="/about">Giới thiệu</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            <Link to="/contact">Liên hệ</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContactsOutlined />}>
            <Link to="/workout">Workout</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <p>
          Created by <a href="#">thangtv611@gmail.com</a>
        </p>
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
