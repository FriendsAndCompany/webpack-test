import React from 'react';
import PropTypes from 'prop-types';

import Text from 'leaf-ui/Text/web';
import { Flex, Layout, ListCard } from '../styles';

// ////////////////////////////////////////////////////////

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

const defaultProps = {
  title: null,
  children: null
};

const Card = ({ title, children }) => (
  <ListCard elevated>
    <Flex display="flex" flexDirection="column">
      <Text weight="bold" size="l">
        {title}
      </Text>
      <Layout paddingTop="1.5rem">{children}</Layout>
    </Flex>
  </ListCard>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
