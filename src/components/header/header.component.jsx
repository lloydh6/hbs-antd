import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Logo from './logo.component';
import Notifications from './notification.component';
import ActionBar from './action-bar.component';

class HeaderComponent extends Component {
  componentDidMount() {
    console.log(this.props.header);
  }

  render() {
    return (
      <Row className="ant-layout-header">
        <Col span={2}>
          <Logo />
        </Col>
        <Col span={17}>
          <ActionBar />
        </Col>
        <Col span={1}>
          <Notifications />
        </Col>
        <Col span={3}>
          Account
        </Col>
      </Row>
    );
  }
}

export default HeaderComponent;
