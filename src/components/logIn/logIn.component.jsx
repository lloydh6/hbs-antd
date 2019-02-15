import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Form,
  Input,
  Button,
} from 'antd';
import styled from 'styled-components';
import logoSrc from '../../images/hbsuk-virtual-lucy-logo.png';

export const LogInApp = styled.div`
  background: url('https://lloydsa.blob.core.windows.net/lloydblobtest/images/rawpixel-760103-unsplash.jpg') no-repeat;
  background-size: 100%;
`;

export const LogInWrapper = styled.div`
  padding: 70px 82px;
  max-width: 470px;
`;

export const LogInLogoImage = styled.img`
  width: 80px;
`;

export const Header = styled.div`
  font-size: 30px;
  padding: 35px 0px 0px 0px;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;

export const SignInForm = styled.div`
  margin: 70px 0px 0px 0px;
`;

export const LogInFormRow = styled.div`
  margin: 20px 0px 0px 0px;
  text-align: right;
`;

export const PrivacyPolicy = styled.div`
  margin: 170px 0px 0px 0px;
`;

const LogInComponent = withRouter(({
  email,
  password,
  updateEmail,
  updatePassword,
  logIn,
  history,
}) => (
  <LogInApp>
    <LogInWrapper>
      <Row type="flex" className="flex-direction-column max-width-600">
        <LogInLogoImage src={logoSrc} alt="logo" />
        <Header>
          <BoldSpan>Welcome,</BoldSpan>
          &nbsp;sign in to continue
        </Header>
        <Form>
          <SignInForm>
            <Form.Item
              colon={false}
              label="Email Address"
            >
              <Input size="large" value={email} onChange={e => updateEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
              colon={false}
              label="Password"
            >
              <Input.Password size="large" value={password} onChange={e => updatePassword(e.target.value)} />
            </Form.Item>
          </SignInForm>
        </Form>
        <div>Forgot password?</div>
        <LogInFormRow>
          <Form.Item>
            <Button
              type="primary"
              onClick={() => {
                logIn();
                setTimeout(() => {
                  history.push('/patient/search');
                });
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </LogInFormRow>
        <PrivacyPolicy>
          Privacy policy
        </PrivacyPolicy>
      </Row>
    </LogInWrapper>
  </LogInApp>
));

LogInComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

export default LogInComponent;
