import React from 'react';
import { Row, Col } from 'antd';
import logo from '../../images/lucy-logo.png';

const Logo = () => (
  <Row type="flex" align="middle" className="logo">
    <Col span={24}>
      <img className="logo-image" src={logo} alt="lucy-logo" />
    </Col>
  </Row>
);

export default Logo;
