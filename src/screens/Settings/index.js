import React from 'react'
import {Card, Button, Input, Form} from 'antd'

const Settings = () => {
  return (
    <Card title="Settings">
        <Form layout='vertical' wrapperCol={{span: 8}}>
            <Form.Item label="Services Provider">
            <Input placeholder="Enter Laundromat's Name" />
            </Form.Item>
            <Form.Item label="Address">
            <Input  placeholder='Enter Physical Address'/>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    </Card>
  )
}

export default Settings