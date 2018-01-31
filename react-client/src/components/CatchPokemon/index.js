import {connect} from 'react-redux';
import CatchPokemon from '../CatchPokemon/CatchPokemon.jsx';
import {addPokemonToState, updateInputValueOnState} from '../../actions/catchPokemon.js';


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