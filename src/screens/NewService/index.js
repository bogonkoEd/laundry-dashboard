import React from 'react'
import { Button, Card, Form, Input, InputNumber } from 'antd'

const CreateService = () => {
  return (
    <Card title="Create New Service" style={{margin: 20}}>
      <Form layout="vertical">
        <Form.Item label="Service Name">
          <Input placeholder='Enter Service Name'/>
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea placeholder='Brief Description of Service'/>
        </Form.Item>
        <Form.Item label="Price (KES)">
         <InputNumber min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save Service</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default CreateService