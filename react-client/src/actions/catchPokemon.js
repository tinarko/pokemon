export default function (pokemonName) {
  return {
    type: 'CATCH_POKEMON',
    payload: pokemonName
  };
}
