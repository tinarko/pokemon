import React from 'react';
import $ from 'jquery';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonToCatch: null,
      caughtPokemon: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
    this.setState({
      toCatch: event.target.value
    });
  }

  handleClick(){
    let pokemonToCatch = this.state.pokemonToCatch;
    let context = this;
    $.ajax({
      url: `pokemon/${pokemonToCatch}`,
      method: 'GET',
      contentType: 'application/json',
      success: function(pokemon) {

      },
      fail: function(err) {
        throw new Error('unable to find pokemon');
      }
    });
  }

  render () {
    return (
      <div>
        <h3>Gotta catch 'em all!</h3>
        <p>Which pokemon would you like to catch?</p>
        <form>
          <input type="text" onChange={this.handleChange}></input>
          <button type="button" onClick={this.handleClick}>Catch</button>
        </form>
      </div>
    );
  }

}

export default Welcome;