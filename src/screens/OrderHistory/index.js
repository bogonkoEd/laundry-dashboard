import React from "react";
import { Card, Table, Tag } from "antd";
import ordersHistory from "../../assets/data/orders-history.json";

const OrderHistory = () => {
  const renderStatus = (status) => {
    if (status === "Delivered") {
      return <Tag color="green">{status}</Tag>;
    }else{
    return <Tag color="red">{status}</Tag>;
  };
}

  const tableColumns = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => "KES " + price,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => renderStatus(status),
    },
  ];
  return (
    <Card title="History">
      <Table
        dataSource={ordersHistory}
        columns={tableColumns}
        rowKey="orderID"
      />
    </Card>
  );
};
export default OrderHistory;
