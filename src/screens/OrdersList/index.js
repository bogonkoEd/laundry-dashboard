import React from "react";
import { Card, Table, Tag } from "antd";
import orders from "../../assets/data/orders.json";
import { useNavigate } from "react-router-dom";


function Orders() {
  const renderStatus = (status) => {
    if (status === "Accepted") {
      return <Tag color="green">{status}</Tag>;
    }
    if (status === "Pending") {
      return <Tag color="orange">{status}</Tag>;
    }
    if (status === "Declined") {
      return <Tag color="red">{status}</Tag>;
    }
  };

  const Navigate = useNavigate();

  const handleRowClick = (orderItem) => {
    Navigate(`order/${orderItem.orderID}`);
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
    <Card title="Orders">
      <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey="orderID"
        onRow={(orderItem) => ({
            onClick: () => handleRowClick(orderItem)          
        })}
      />
    </Card>
  );
}

export default Orders;
