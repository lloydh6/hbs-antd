import React from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';

const PatientLookupComponent = ({email, mobile, search}) => (
  <div>
    <Row type="flex" justify="center" align="middle" className="page-header-row">
      <Col span={24}>
        <h1>Patient Lookup</h1>
      </Col>
    </Row>
    <Form>
      <Row>
        <Col span={10} offset={7}>
          <Form.Item
            colon={false}
            label="Email Address"
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={7}>
          Or
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={7}>
          <Form.Item
            colon={false}
            label="Mobile Number"
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col className="text-align-center">
          <Form.Item>
            <Button>
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
);

export default PatientLookupComponent;
