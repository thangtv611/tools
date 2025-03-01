import React from 'react';
import { Typography, Divider, List, Card } from 'antd';
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;

const About = () => {
  const tools = [
    {
      title: 'Công cụ 1: Trình chỉnh sửa văn bản',
      description: 'Hỗ trợ chỉnh sửa văn bản nhanh chóng với giao diện thân thiện.',
    },
    {
      title: 'Công cụ 2: Máy tính đa năng',
      description: 'Tính toán các phép toán cơ bản và nâng cao trong tích tắc.',
    },
    {
      title: 'Công cụ 3: Trình quản lý công việc',
      description: 'Giúp bạn sắp xếp công việc hàng ngày một cách hiệu quả.',
    },
  ];

  return (
    <div style={{ padding: '50px 0', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Giới thiệu</Title>
      <Paragraph>
        Chào mừng bạn đến với trang cá nhân của tôi! Đây là một không gian nhỏ mà tôi xây dựng để chia sẻ và tổng hợp 
        những công cụ hữu ích, giúp cuộc sống và công việc của bạn trở nên dễ dàng hơn. Tôi là một người đam mê công nghệ, 
        thích khám phá và tạo ra những giải pháp đơn giản nhưng hiệu quả.
      </Paragraph>
      <Divider />
      <Title level={3}>Mục tiêu của trang</Title>
      <Paragraph>
        Trang web này được thiết kế để cung cấp các công cụ tiện ích, từ những ứng dụng nhỏ hỗ trợ công việc hàng ngày 
        đến các giải pháp sáng tạo cho những vấn đề thường gặp. Tất cả đều được xây dựng với sự tối giản và dễ sử dụng 
        trong tâm trí.
      </Paragraph>
      <Divider />
      <Title level={3}>Các công cụ nổi bật</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={tools}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>{item.description}</Card>
          </List.Item>
        )}
      />
      <Divider />
      <Paragraph>
        Cảm ơn bạn đã ghé thăm! Nếu bạn có ý tưởng hoặc đề xuất cho các công cụ mới, đừng ngần ngại liên hệ với tôi qua 
        trang <Link to="/contact">Liên hệ</Link>. Tôi luôn sẵn sàng lắng nghe và cải thiện!
      </Paragraph>
    </div>
  );
};

export default About;