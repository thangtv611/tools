import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ContactsOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

const LayoutComponent = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
          background: "#001529",
        }}
      >
        <div className="logo" style={{ padding: "16px", textAlign: "center" }}>
          <Title level={3} style={{ margin: 0, color: "#fff" }}>
            Aaron
          </Title>
        </div>
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home page</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to="/about">Giới thiệu</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            <Link to="/contact">Liên hệ</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/workout">Bộ đếm tập thể dục</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ marginLeft: 50 }}>
          {children}
          <SpeedInsights />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          CopyRight ©2021 Created by Aaron
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
