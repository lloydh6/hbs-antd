import React from 'react';
import { Row, Col, InputNumber } from 'antd';

const DateOfBirthControl = () => (
  <Row type="flex" className="dob-wrapper">
    <Col span={7}>
      <InputNumber size="large" placeholder="DD" />
    </Col>
    <Col span={7}>
      <InputNumber size="large" placeholder="MM" />
    </Col>
    <Col span={7}>
      <InputNumber size="large" placeholder="YYYY" />
    </Col>
  </Row>
);

export default DateOfBirthControl;
