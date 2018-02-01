import React from 'react';
import _ from 'lodash/fp';

import CatchPokemon from '../CatchPokemon';

export default class Trainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this.props.trainerName)
    const { updateTrainerOnState = () => {}} = this.props;
    updateTrainerOnState(_.upperFirst(event.target.value));
  }

  handleSubmit() {
    console.log(this.props.trainerName)
    const { setTrainer = () => {}} = this.props;
    setTrainer();
  }

  render () {
    if (!this.props.trainerSubmitted) {
      return (
        <div>
          <h4>What is your name?</h4>
          <form>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome, Trainer {this.props.trainerName}!</h2>
          <CatchPokemon />
        </div>
      );
    }
  }
}
