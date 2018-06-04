import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';

import Stringify from '../components/Stringify';
import Card from '../components/Card';
import Base64 from '../components/Base64';
import Loader from '../components/Loader';
import { Layout } from '../styles';

// ////////////////////////////////////////////////////////

const propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({ data, isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    const { index } = this.props;
    return (
      <Fragment>
        <Layout padding="1.75rem 0">
          <Text color="blue" size="l" weight="bold">
            API {index + 1}
          </Text>
        </Layout>
        <Card title="Stringify">
          {isLoading ? <Loader /> : <Stringify data={data} depth={1} />}
        </Card>
        <Card title="Base64">{isLoading ? <Loader /> : <Base64 data={data} />}</Card>
      </Fragment>
    );
  }
}

Fetch.propTypes = propTypes;

export default Fetch;
