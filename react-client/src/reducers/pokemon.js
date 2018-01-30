export default function (state = {
  pokemonToCatch: '',
  caughtPokemon: []
}, action) {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE_ON_STATE':
      return {
        caughtPokemon: state.caughtPokemon || [],
        pokemonToCatch: action.payload
      };
    case 'ADD_POKEMON_TO_STATE':
      const caughtPokemon = state.caughtPokemon || [];
      return {
        caughtPokemon: [...caughtPokemon,
          action.payload
        ],
        pokemonToCatch: ''
      };
    default:
      return state;
  }
}
