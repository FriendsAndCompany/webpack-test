import React from 'react';
import PropTypes from 'prop-types';

import Text from 'leaf-ui/Text/web';

// ////////////////////////////////////////////////////////

const propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const defaultProps = {
  data: {}
};

const Base64 = ({ data }) => (
  <Text size="m" style={{ wordBreak: 'break-all' }}>
    {btoa(JSON.stringify(data))}
  </Text>
);

Base64.propTypes = propTypes;
Base64.defaultProps = defaultProps;

export default Base64;
