export const addPokemonToState = (newPokemon) => {
  return {
    type: 'ADD_POKEMON_TO_STATE',
    payload: newPokemon
  };
};

export const updateInputValueOnState = (pokemonName) => {
  return {
    type: 'UPDATE_INPUT_VALUE_ON_STATE',
    payload: pokemonName
  }
};