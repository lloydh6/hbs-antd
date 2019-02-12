import React from 'react';
import { Icon, Row, Col } from 'antd';

const Notifications = () => (
  <Row type="flex" align="middle" className="notifications">
    <Col span={24}>
      <Icon type="bell" style={{ fontSize: '20px' }} />
    </Col>
  </Row>
);

export default Notifications;
