import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import logo from '../../images/lucy-logo.png';

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Logo = () => (
  <Row type="flex" align="middle" className="logo">
    <Col span={24}>
      <LogoImage
        src={logo}
        alt="lucy-logo"
      />
    </Col>
  </Row>
);

export default Logo;
