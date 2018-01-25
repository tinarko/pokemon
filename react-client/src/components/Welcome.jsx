import React from 'react';
import Catch from '../components/Catch.jsx';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'tina',
      submitted: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit() {
    this.setState({submitted: true});
  }

  render () {
    if (!this.state.submitted) {
      return (
        <div>
          <h4> What is your name?</h4>
          <form>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome, Trainer {this.state.name}!</h2>
          <Catch />
        </div>
      );
    }
  }

}

export default Welcome;