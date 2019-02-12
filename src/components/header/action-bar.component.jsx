import React from 'react';
import {
  Row,
  Col,
  Button,
  Icon,
} from 'antd';

const ActionBar = () => (
  <div className="action-bar">
    <Row>
      <Col span={10}>
        
      </Col>
      <Col span={14}>
        <div className="action-button-group">
          <Button
            type="primary"
          >
            <Icon type="plus" />
            New Task
          </Button>
        </div>
      </Col>
    </Row>
  </div>
);

export default ActionBar;
