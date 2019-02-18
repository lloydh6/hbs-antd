import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const PageHeaderRow = ({ header }) => (
  <Row type="flex" justify="center" align="middle" className="page-header-row">
    <Col span={24}>
      <h1>{header}</h1>
    </Col>
  </Row>
);

PageHeaderRow.propTypes = {
  header: PropTypes.string.isRequired,
};

export default PageHeaderRow;
