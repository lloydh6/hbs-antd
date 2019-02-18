import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';
import PageHeaderRow from '../common/pageHeaderRow';

class PatientLookupComponent extends Component {
  componentWillMount() {
    const { initializeComponent } = this.props;
    initializeComponent();
  }

  render() {
    const {
      email,
      mobile,
      updateEmail,
      updateMobile,
      history,
    } = this.props;
    return (
      <div>
        <PageHeaderRow header="Patient Lookup" />
        <Form>
          <Row type="flex" className="flex-direction-column" justify="center" align="middle">
            <Col span={10} style={{ maxWidth: '600px' }}>
              <Form.Item
                colon={false}
                label="Email Address"
              >
                <Input size="large" value={email} onChange={e => updateEmail(e.target.value)} />
              </Form.Item>
            </Col>
            <Col span={10} style={{ maxWidth: '600px' }}>
              Or
            </Col>
            <Col span={10} style={{ maxWidth: '600px' }}>
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
                <Button
                  type="primary"
                  onClick={() => {
                    if (email || mobile) {
                      history.push(`/patient/search/email/${email || mobile}`);
                    }
                  }}
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

PatientLookupComponent.propTypes = {
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateMobile: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  initializeComponent: PropTypes.func.isRequired,
};

export default withRouter(PatientLookupComponent);
