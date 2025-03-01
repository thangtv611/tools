import React from "react";
import { Typography, Form, Input, Button } from "antd";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <div style={{ padding: "50px 0", maxWidth: "600px", margin: "0 auto" }}>
      <Title>Liên hệ</Title>
      <Paragraph>Liên hệ với chúng tôi qua form dưới đây:</Paragraph>
      <Form layout="vertical">
        <Form.Item label="Họ tên">
          <Input placeholder="Nhập họ tên" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item label="Tin nhắn">
          <Input.TextArea rows={4} placeholder="Nhập tin nhắn của bạn" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Gửi</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
