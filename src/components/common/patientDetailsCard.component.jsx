import React from 'react';
import { Row, Col } from 'antd';
import RoundedImage from './rounded-image.component';

const PatientDetailsCard = () => (
  <div className="patient-details-card">
    <Row type="flex" className="flex-nowrap">
      <Col span={7} className="primary">
        <Row type="flex" className="image" align="middle">
          <Col className="column">
            <RoundedImage
              src="https://lh3.googleusercontent.com/-j_NAOXDQmwM/XDXb4NmxKTI/AAAAAAAADD4/7RP_cSz5VR4YTBaKZLGidH4Yf2ViWWQtQCEwYBhgL/w280-h280-p/lloydhesketh.jpg"
              width={100}
              style={{ borderStyle: 'solid', borderWidth: '1px' }}
            />
            <div className="name">Lloyd Hesketh</div>
          </Col>
        </Row>
        <Row type="flex" align="middle" className="dob">
          <Col>
            <div>D.O.B</div>
            <div>
              16/04/1991
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={17} className="secondary">
        Details
      </Col>
    </Row>
  </div>
);

export default PatientDetailsCard;
