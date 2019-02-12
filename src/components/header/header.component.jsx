import React from 'react';
import { Row, Col } from 'antd';

import Logo from './logo.component';
import Notifications from './notification.component';
import ActionBar from './action-bar.component';
import Account from './account.component';

const HeaderComponent = () => (
  <Row className="ant-layout-header flex-nowrap" type="flex" justify="start" align="middle">
    <Col span={2}>
      <Logo />
    </Col>
    <Col span={17}>
      <ActionBar />
    </Col>
    <Col span={1}>
      <Notifications />
    </Col>
    <Col span={4}>
      <Account />
    </Col>
  </Row>
);

export default HeaderComponent;
