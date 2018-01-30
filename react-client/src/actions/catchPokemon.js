export const catchPokemon = (newPokemon) => {
  return {
    type: 'CATCH_POKEMON',
    payload: newPokemon
  };
};

export const setPokemon = (pokemonName) => {
  return {
    type: 'SET_POKEMON',
    payload: pokemonName
  }
};