export default function (state = {}, action) {
  switch (action.type) {
    case 'CATCH_POKEMON':
      return {
        pokemonToCatch: action.payload
      };
    default:
    return state;
  }
}
