import React from 'react';
import {connect} from 'react-redux';
import catchPokemon from '../actions/catchPokemon.js';

import CaughtPokemon from '../components/CaughtPokemon.jsx';

class CatchPokemon extends React.Component {

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
    const {pokemonToCatch, caughtPokemon} = this.state;
    const url = `pokemon/${pokemonToCatch}`;
    fetch(url).then(
      (res) => {
        return res.json();
      }).then(data => {
        const newPokemon = {
          pokemonName: pokemonToCatch,
          sprite: data.sprite
        };
        this.setState({
          caughtPokemon: [...caughtPokemon, newPokemon]
        });
    }).catch(err => {
      throw new Error('didnt set pokemon correctly on state', err);
    })
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

function mapStateToProps(state) {
  return {
    pokemonToCatch: state.pokemonToCatch,
    caughtPokemon: state.caughtPokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catchPokemon: (pokemonName) => {
      dispatch(catchPokemon(pokemonName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchPokemon);