import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../src/store.js';

import Trainer from './components/Trainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <Trainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
