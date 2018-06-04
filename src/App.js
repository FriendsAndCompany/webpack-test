import React, { Component } from 'react';

import { AppContainer } from './styles';
import Fetch from './containers/Fetch';
import { API_URLS } from './config';
import Header from './components/Header';

// ////////////////////////////////////////////////////////

class App extends Component {
  state = {};

  renderAPIData = () => API_URLS.map((url, index) => <Fetch key={url} url={url} index={index} />);

  render() {
    return (
      <AppContainer>
        <Header />
        {this.renderAPIData()}
      </AppContainer>
    );
  }
}

export default App;
