import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Button,
} from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';
import PatientDetailsCard from '../common/patientDetailsCard.component';

const PatientMatchComponent = withRouter(({ match, history }) => (
  <div>
    <PageHeaderRow header="Patient Match" />
    <Row type="flex" align="middle" justify="center">
      <Col span={10} className="patient-card-wrapper">
        <PatientDetailsCard />
      </Col>
    </Row>
    <Row type="flex" justify="center" className="form-button-row">
      <Form>
        <Col className="text-align-center" span={12}>
          <Form.Item>
            <Button onClick={() => { history.push('/patient/search'); }}>
              Search Again
            </Button>
          </Form.Item>
        </Col>
        <Col className="text-align-center" span={12}>
          <Form.Item>
            <Button type="primary" onClick={() => {}}>
              Confirm Patient
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </Row>
  </div>
));

PatientMatchComponent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PatientMatchComponent;
