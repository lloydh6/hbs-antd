import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Row, Col, Button } from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';
import CreatePatient from '../../containers/createPatient/createPatient.container';

const PatientNotFoundComponent = withRouter(({ match, history }) => (
  <div>
    <PageHeaderRow header="No Results Found" />
    <Row type="flex" align="middle" justify="center" className="flex-direction-column">
      <Col span={8} className="text-align-center">
        No patients records were found matching&nbsp;
        <span className="text-highlight">{match.params.query}</span>
      </Col>
      <Col className="form-button-row text-align-center" span={6}>
        <Button onClick={() => { history.push('/patient/search'); }}>
          Search Again
        </Button>
      </Col>
      <Col span={8} className="hr" />
    </Row>
    <CreatePatient />
    <Row className="footer-buffer" />
  </div>
));

PatientNotFoundComponent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PatientNotFoundComponent;
