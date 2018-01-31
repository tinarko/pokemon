import React from 'react';
import CaughtPokemon from '../CaughtPokemon/CaughtPokemon.jsx';

export default class CatchPokemon extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayCaughtPokemon = this.displayCaughtPokemon.bind(this);
  }

  handleChange(event) {
    const { updateInputValueOnState = () => {}} = this.props;
    updateInputValueOnState(event.target.value);
  }

  handleClick(){
    const url = `pokemon/${this.props.pokemonToCatch}`;
    fetch(url).then(
      (res) => {
        return res.json();
      }).then(data => {
        const newPokemon = {
          pokemonName: this.props.pokemonToCatch,
          sprite: data.sprite
        };
        this.props.addPokemonToState(newPokemon);
    }).catch(err => {
      throw new Error('Did not set pokemon correctly on props', err);
    })
  }

  displayCaughtPokemon() {
    const caughtPokemon = this.props.caughtPokemon || [];
    return caughtPokemon.map((pokemon, index) => {
      return (
        <CaughtPokemon pokemon={pokemon} key={index}/>
      );
    });
  }

  render () {
    return (
      <div>
        <h3>Gotta catch 'em all!</h3>
        <p>Which pokemon would you like to catch?</p>
        <form>
          <input type="text" onChange={this.handleChange} value={this.props.pokemonToCatch}></input>
          <button type="button" onClick={this.handleClick}>Catch</button>
          {this.displayCaughtPokemon()}
        </form>
      </div>
    );
  }
}
