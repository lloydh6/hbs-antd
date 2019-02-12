import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Row, Col, Form, Button } from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';
import PatientDetailsCard from '../common/patientDetailsCard.component';

const PatientMatchComponent = ({ match }) => (
  <div>
    <PageHeaderRow header="Patient Match" />
    <Row type="flex" align="middle">
      <Col span={10} offset={7}>
        <PatientDetailsCard />
      </Col>
    </Row>
    <Row>
      <Form>
        <Col span={10} offset={7}>
          <Col className="text-align-center" span={12}>
            <Form.Item>
              <Button onClick={() => {}}>
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
        </Col>
      </Form>
    </Row>
  </div>
);

PatientMatchComponent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PatientMatchComponent;
