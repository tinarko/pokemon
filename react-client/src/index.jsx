import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById('app'));
