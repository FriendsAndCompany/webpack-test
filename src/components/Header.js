import React from 'react';
import Text from 'leaf-ui/Text/web';

import { Layout } from '../styles';

// ////////////////////////////////////////////////////////

const Header = () => (
  <Layout paddingBottom="2rem">
    <Text weight="bold" size="xxl" color="blue">
      Welcome
    </Text>
  </Layout>
);

export default Header;
