import React from 'react';
import PropTypes from 'prop-types';

import Text from 'leaf-ui/Text/web';

// ////////////////////////////////////////////////////////

const propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  depth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const defaultProps = {
  data: {},
  depth: '\t'
};

const Stringify = ({ data, depth }) => <Text size="m">{JSON.stringify(data, null, depth)}</Text>;

Stringify.propTypes = propTypes;
Stringify.defaultProps = defaultProps;

export default Stringify;
