import React from 'react';
import {
  Row,
  Col,
  Button,
  Icon,
} from 'antd';
import styled from 'styled-components';

export const ButtonGroup = styled.div`
  text-align: right;
  vertical-align: middle;
`;

const ActionBar = () => (
  <div className="action-bar">
    <Row>
      <Col span={10}>
        
      </Col>
      <Col span={14}>
        <ButtonGroup>
          <Button
            type="primary"
          >
            <Icon type="plus" />
            New Task
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </div>
);

export default ActionBar;
