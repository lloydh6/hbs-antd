import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';
import DateOfBirthControl from '../common/dob.component';

const CreatePatientComponent = withRouter(({
  firstName,
  updateFirstName,
  lastName,
  updateLastName,
  email,
  updateEmail,
  mobile,
  updateMobile,
  history,
}) => (
  <div>
    <PageHeaderRow header="Create Account" />
    <Form>
      <Row type="flex" className="flex-direction-column" align="middle">
        <Col span={10}>
          <Form.Item
            colon={false}
            label="Patient First Name"
          >
            <Input size="large" value={firstName} onChange={e => updateFirstName(e.target.value)} />
          </Form.Item>
          <Form.Item
            colon={false}
            label="Patient First Name"
          >
            <Input size="large" value={lastName} onChange={e => updateLastName(e.target.value)} />
          </Form.Item>
          <Form.Item
            colon={false}
            label="Date Of Birth"
          >
            <Col span={12}>
              <DateOfBirthControl />
            </Col>
          </Form.Item>
          <Form.Item
            colon={false}
            label="Patent Email Address"
          >
            <Input size="large" value={email} onChange={e => updateEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            colon={false}
            label="Patent Mobile Number"
          >
            <Input size="large" value={mobile} onChange={e => updateMobile(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col className="text-align-center">
          <Form.Item>
            <Button type="primary" onClick={() => { history.push('/patient/result/abc-123-456'); }}>
              Create Patient
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
));

CreatePatientComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  updateLastName: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateMobile: PropTypes.func.isRequired,
};

export default CreatePatientComponent;
