import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';


const PatientLookupComponent = ({ email, mobile, updateEmail, updateMobile }) => (
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
            <Input size="large" value={email} onChange={e => updateEmail(e.target.value)} />
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
            <Input size="large" value={mobile} onChange={e => updateMobile(e.target.value)} />
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

PatientLookupComponent.propTypes = {
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateMobile: PropTypes.func.isRequired,
};

export default PatientLookupComponent;
