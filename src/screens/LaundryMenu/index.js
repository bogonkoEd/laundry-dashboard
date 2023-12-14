import React from 'react'
import { Button, Card, Table } from 'antd'
import dishes from "../../assets/data/dishes.json";
import { Link } from 'react-router-dom';

const LaundryMenu = () => {
    const tableColumns =[
        {
            title: "Service Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => <span>KES {price}</span>
        },
        {
            title: "Action",
            key: "action",
            render: () => <Button danger>Remove</Button>
        },
        
    ]

    const renderNewService = () => {
        return (
            <Link to="/menu/new">
            <Button type="primary" block>Add New Service</Button>
            </Link>
        )
    }
  return (
    <Card title="Menu" style={{margin: 20}} extra={renderNewService()}>
      <Table dataSource={dishes} columns={tableColumns} />
    </Card>
  )
}

export default LaundryMenu