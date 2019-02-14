import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Form,
  Input,
  Col,
  Button,
} from 'antd';
import logoSrc from '../../images/hbsuk-virtual-lucy-logo.png';

const LogInComponent = ({
  email,
  password,
  updateEmail,
  updatePassword,
  logIn,
}) => (
  <div className="log-in-app">
    <div className="log-in-wrapper">
      <Row type="flex" className="flex-direction-column max-width-600">
        <img src={logoSrc} alt="logo" className="logo" />
        <div className="header">
          <span className="bold">Welcome,</span>
          &nbsp;sign in to continue
        </div>
        <Form className="sign-in-form">
          <Form.Item
            colon={false}
            label="Email Address"
          >
            <Input size="large" value={email} onChange={e => updateEmail(e.target.value)}/>
          </Form.Item>
          <Form.Item
            colon={false}
            label="Password"
          >
            <Input.Password size="large" value={password} onChange={e => updatePassword(e.target.value)} />
          </Form.Item>
        </Form>
        <div>Forgot password?</div>
        <Col className="login-button-row text-align-right">
          <Form.Item>
            <Button
              type="primary"
              onClick={logIn}
            >
              Sign In
            </Button>
          </Form.Item>
        </Col>
        <div className="privacy-policy">
          Privacy policy
        </div>
      </Row>
    </div>
  </div>
);

LogInComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

export default LogInComponent;
