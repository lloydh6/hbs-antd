import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';


const PatientLookupComponent = withRouter(({
  email,
  mobile,
  updateEmail,
  updateMobile,
  history,
}) => (
  <div>
    <PageHeaderRow header="Patient Lookup" />
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
            <Button type="primary" onClick={() => { history.push('/patient/id-123-456'); }}>
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
));

PatientLookupComponent.propTypes = {
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateMobile: PropTypes.func.isRequired,
};

export default PatientLookupComponent;
