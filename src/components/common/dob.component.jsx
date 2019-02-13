import React from 'react';
import { Row, Col, Input } from 'antd';

const DateOfBirthControl = () => (
  <Row type="flex" className="dob-wrapper">
    <Col span={7}>
      <Input size="large" placeholder="DD" />
    </Col>
    <Col span={7}>
      <Input size="large" placeholder="MM" />
    </Col>
    <Col span={7}>
      <Input size="large" placeholder="YYYY" />
    </Col>
  </Row>
);

export default DateOfBirthControl;
