import React from 'react';

class CaughtPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <img src={this.props.pokemon.sprite}/>
        <p>{this.props.pokemon.pokemonName}</p>
      </div>
    );
  }
}

export default CaughtPokemon;