import React from 'react';
import { Row, Col, Icon } from 'antd';
import RoundedImage from '../common/rounded-image.component';

const Account = () => (
  <div className="account-details">
    <Row type="flex" align="middle" className="flex-nowrap" justify="space-between">
      <Col>
        <RoundedImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1200px-AXA_Logo.svg.png" />
        <span className="user-image">
          <RoundedImage src="https://lh3.googleusercontent.com/-j_NAOXDQmwM/XDXb4NmxKTI/AAAAAAAADD4/7RP_cSz5VR4YTBaKZLGidH4Yf2ViWWQtQCEwYBhgL/w280-h280-p/lloydhesketh.jpg" />
        </span>
      </Col>
      <Col>
        <div>Lloyd</div>
      </Col>
      <Col>
        <Icon type="down" />
      </Col>
    </Row>
  </div>
);

export default Account;
