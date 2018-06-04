import React from 'react';
import PropTypes from 'prop-types';

import { TextWrap } from '../styles';

// ////////////////////////////////////////////////////////

const propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const defaultProps = {
  data: {}
};

const Base64 = ({ data }) => (
  <TextWrap size="m" style={{ wordBreak: 'break-all' }}>
    {btoa(JSON.stringify(data))}
  </TextWrap>
);

Base64.propTypes = propTypes;
Base64.defaultProps = defaultProps;

export default Base64;
