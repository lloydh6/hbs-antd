import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from '../../containers/header/header.container';

const {
  Content,
} = Layout;

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const LayoutWrapper = ({ children, disableHeader }) => (
  <Content>
    { disableHeader ? null : <Header />}
    {children}
  </Content>
);

LayoutWrapper.propTypes = {
  children: PropTypes.arrayOf([PropTypes.func]),
  disableHeader: PropTypes.bool,
};

LayoutWrapper.defaultProps = {
  children: null,
  disableHeader: false,
};

const AuthenticatedRoute = ({
  component: Component,
  disableHeader,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated === true
        ? (
          <LayoutWrapper disableHeader={disableHeader}>
            <Component {...props} />
          </LayoutWrapper>
        )
        : (
          <Redirect to={
            {
              pathname: '/login',
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }
          }
          />
        )
    )}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  disableHeader: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

AuthenticatedRoute.defaultProps = {
  disableHeader: false,
  isAuthenticated: false,
};

export default AuthenticatedRoute;
