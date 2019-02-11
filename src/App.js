import React from 'react';
import { Form, Select, Input, Icon, Button } from 'antd';
import './App.css';

const { Option } = Select;

const App = () => (
  <Form>
      <Form.Item
      colon={false}
      label="Icon Buttons"
    >
      <Button type="primary" shape="circle" icon="calendar" size="large" />
      &nbsp;
      <Button shape="circle" icon="phone" size="large" />
      &nbsp;
      <Button shape="circle" icon="phone" />
      &nbsp;
      <Button shape="circle" icon="message" size="small" />
    </Form.Item>
  
    <Form.Item
      colon={false}
      label="Email Address"
    >
      <Input size="large" defaultValue={"Howdy"} />
    </Form.Item>
    <Form.Item
      colon={false}
      label="Password"
    >
      <Input type="password" size="large" />
    </Form.Item>
    <Form.Item style={{textAlign: "center"}}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
          &nbsp;
          <Button><Icon type="down"/>
            Example
          </Button>
          &nbsp;
          <Button
            type="primary"
          >
          <Icon type="plus"/>
            New Task
          </Button>
        </Form.Item>
  </Form>
);

export default App;
