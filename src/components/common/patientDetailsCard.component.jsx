import React, { useState } from 'react';
import { Row, Col, Button, Input } from 'antd';
import moment from 'moment';
import RoundedImage from './rounded-image.component';

const PatientDetailsCard = () => {
  const [editMode, setEditMode] = useState(false);
  return (
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
            <Col span={19} offset={5}>
              <div className="information-title">D.O.B</div>
              <div className="information-details">
                {moment('19910416').format('DD/MM/YYYY')}
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={17} className="secondary">
          <Row type="flex" className="information-wrapper">
            <Col span={16}>
              <Row type="flex" className="details">
                <Col>
                  <div className="information-title">Address</div>
                  {
                    editMode === false
                      ? <div className="information-details">3B High Street, Newton</div>
                      : <Input value="3B High Street, Newton" />
                  }
                  {
                    editMode === false
                      ? <div className="information-details">WA12 9SP</div>
                      : <Input value="WA12 9SP" />
                  }
                </Col>
                <Col>
                  <div className="information-title">Email</div>
                  {
                    editMode === false
                      ? <div className="information-details">my-email@ansgroup.co.uk</div>
                      : <Input value="my-email@ansgroup.co.uk" />
                  }
                  
                </Col>
                <Col>
                  <div className="information-title">Phone</div>
                  {
                    editMode === false
                      ? <div className="information-details">07460876543</div>
                      : <Input value="07460876543" />
                  }
                  
                </Col>
              </Row>
            </Col>
            <Col span={8} className="text-align-right">
              {
                editMode === false
                  ? (
                    <Button onClick={() => setEditMode(!editMode)}>
                      Edit
                    </Button>
                  )
                  : (
                    <div>
                      <Button type="primary" onClick={() => setEditMode(!editMode)}>
                        Save
                      </Button>
                    </div>
                  )
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PatientDetailsCard;
