export default function (state = {
  pokemonToCatch: '',
  caughtPokemon: []
}, action) {
  switch (action.type) {
    case 'SET_POKEMON':
      return {
        pokemonToCatch: action.payload
    };
    case 'CATCH_POKEMON':
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
