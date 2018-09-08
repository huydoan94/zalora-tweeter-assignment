import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import createStore from './utils/createStore';
import Main from './components/Main';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.store = createStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
