import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title>Giới thiệu</Title>
      <Paragraph>
        Đây là trang giới thiệu. Chúng tôi là một nhóm phát triển ứng dụng web với React và Ant Design, nhằm mang lại trải nghiệm tốt nhất cho người dùng.
      </Paragraph>
    </div>
  );
};

export default About;