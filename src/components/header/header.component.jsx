import React from 'react';
import { Row } from 'antd';

import Logo from './logo.component';
import Notifications from './notification.component';
import ActionBar from './action-bar.component';
import Account from './account.component';

const HeaderComponent = () => (
  <Row className="ant-layout-header flex-nowrap" type="flex" justify="start" align="middle">
    <Logo />
    <ActionBar />
    <Notifications />
    <Account />
  </Row>
);

export default HeaderComponent;
