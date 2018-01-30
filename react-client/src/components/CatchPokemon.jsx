import React from 'react';
import {connect} from 'react-redux';
import {addPokemonToState, updateInputValueOnState} from '../actions/catchPokemon.js';

import CaughtPokemon from '../components/CaughtPokemon.jsx';

class CatchPokemon extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayCaughtPokemon = this.displayCaughtPokemon.bind(this);
  }

  handleChange(event) {
    this.props.updateInputValueOnState(event.target.value);
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
      throw new Error('didnt set pokemon correctly on props', err);
    })
  }

  displayCaughtPokemon() {
    return this.props.caughtPokemon.map((pokemon, index) => {
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

function mapStateToProps(state) {
  return {
    pokemonToCatch: state.pokemon.pokemonToCatch,
    caughtPokemon: state.pokemon.caughtPokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateInputValueOnState: (pokemonName) => {
      dispatch(updateInputValueOnState(pokemonName));
    },
    addPokemonToState: (newPokemon) => {
      dispatch(addPokemonToState(newPokemon));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchPokemon);