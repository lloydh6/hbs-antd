import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import PageHeaderRow from '../common/pageHeaderRow.component';
import CreatePatient from '../../containers/createPatient/createPatient.container';

export const FooterBuffer = styled.div`
  height: 300px;
`;

export const HR = styled.div`
  border-bottom: 1px solid #ff9f00;
`;

export const TextHighlightSpan = styled.span`
  font-weight: bold;
  color: #ff9f00;
`;

const PatientNotFoundComponent = withRouter(({ match, history }) => (
  <div>
    <PageHeaderRow header="No Results Found" />
    <Row type="flex" align="middle" justify="center" className="flex-direction-column">
      <Col span={8} className="text-align-center">
        No patients records were found matching&nbsp;
        <TextHighlightSpan>{match.params.query}</TextHighlightSpan>
      </Col>
      <Col className="form-button-row text-align-center" span={6}>
        <Button onClick={() => { history.push('/patient/search'); }}>
          Search Again
        </Button>
      </Col>
      <Col span={8}>
        <HR />
      </Col>
    </Row>
    <CreatePatient />
    <FooterBuffer />
  </div>
));

PatientNotFoundComponent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PatientNotFoundComponent;
