import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
