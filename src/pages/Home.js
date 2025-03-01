import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <div className="hero-section" style={{ background: '#f0f2f5', padding: '80px 0', textAlign: 'center' }}>
        <Title>Chào mừng đến với MyLanding</Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 20px' }}>
          Đây là trang chủ của ứng dụng. Hãy bắt đầu hành trình của bạn ngay hôm nay!
        </Paragraph>
        <Button type="primary" size="large">
          Bắt đầu ngay
        </Button>
      </div>

      <Row gutter={[16, 16]} style={{ padding: '50px 0' }}>
        <Col span={8}>
          <Title level={3}>Tính năng 1</Title>
          <Paragraph>Mô tả ngắn về tính năng đầu tiên.</Paragraph>
        </Col>
        <Col span={8}>
          <Title level={3}>Tính năng 2</Title>
          <Paragraph>Mô tả ngắn về tính năng thứ hai.</Paragraph>
        </Col>
        <Col span={8}>
          <Title level={3}>Tính năng 3</Title>
          <Paragraph>Mô tả ngắn về tính năng thứ ba.</Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Home;