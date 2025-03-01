import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Spin } from "antd";
import axios from "axios";

const { Title, Paragraph } = Typography;

function delay(time = Math.random() * 2000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCryptoData(response.data);
      await delay();
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 20000);
    return () => clearInterval(interval);
  }, []);

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span>
          <img
            src={record.image}
            alt={text}
            style={{ width: 20, marginRight: 8 }}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Mã",
      dataIndex: "symbol",
      key: "symbol",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Giá (USD)",
      dataIndex: "current_price",
      key: "current_price",
      render: (price) => `$${price.toLocaleString()}`,
    },
    {
      title: "Thay đổi 24h (%)",
      dataIndex: "price_change_percentage_24h",
      key: "price_change_percentage_24h",
      render: (change) => (
        <span style={{ color: change >= 0 ? "green" : "red" }}>
          {change?.toFixed(2)}%
        </span>
      ),
    },
    {
      title: "Vốn hóa thị trường (USD)",
      dataIndex: "market_cap",
      key: "market_cap",
      render: (cap) => `$${cap.toLocaleString()}`,
    },
  ];

  return (
    <div style={{ padding: "50px 0" }}>
      <div
        className="hero-section"
        style={{
          background: "#f0f2f5",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Title>Chào mừng đến với Aaron</Title>
        <Paragraph
          style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 20px" }}
        >
          Đây là trang chủ của ứng dụng. Dưới đây là giá real-time của top 10
          cryptocurrency!
        </Paragraph>
        <Button type="primary" size="large">
          Bắt đầu ngay
        </Button>
      </div>

      <div style={{ padding: "50px 0", maxWidth: "1200px", margin: "0 auto" }}>
        <Title level={3}>Top 10 Cryptocurrency (Real-Time)</Title>
        {loading ? (
          <Spin
            size="large"
            style={{ display: "block", margin: "20px auto" }}
          />
        ) : (
          <Table
            columns={columns}
            dataSource={cryptoData}
            rowKey="id"
            pagination={false}
            bordered
          />
        )}
      </div>
    </div>
  );
};

export default Home;
