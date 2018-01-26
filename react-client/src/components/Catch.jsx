import React from 'react';
import $ from 'jquery';
import CaughtPokemon from '../components/CaughtPokemon.jsx';

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
      pokemonToCatch: event.target.value
    });
  }

  handleClick(){
    let pokemonToCatch = this.state.pokemonToCatch;
    let caughtPokemon = this.state.caughtPokemon;
    let context = this;
    $.ajax({
      url: `pokemon/${pokemonToCatch}`,
      method: 'GET',
      contentType: 'application/json',
      success: function(sprite) {
        const newPokemon = {
          pokemonName: pokemonToCatch,
          sprite: sprite
        };

        context.setState({
          caughtPokemon: [...caughtPokemon, newPokemon]
        });
      },
      fail: function(err) {
        throw new Error('Unable to find pokemon');
      }
    });
  }

  render () {
    const rows = this.state.caughtPokemon.map((pokemon, index) => {
              return (
                <CaughtPokemon pokemon={pokemon} key={index}/>
              );
            });
    return (
      <div>
        <h3>Gotta catch 'em all!</h3>
        <p>Which pokemon would you like to catch?</p>
        <form>
          <input type="text" onChange={this.handleChange}></input>
          <button type="button" onClick={this.handleClick}>Catch</button>
          {rows}
        </form>
      </div>
    );
  }

}

export default Welcome;