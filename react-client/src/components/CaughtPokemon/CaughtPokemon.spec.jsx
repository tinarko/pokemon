import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import CaughtPokemon from '../CaughtPokemon/CaughtPokemon.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<CaughtPokemon/>', () => {
  describe('renders properly', () => {
    const pokemon = {
      sprite: 'pikachu.img',
      pokemonName: 'pikachu'
    };
    it('renders without errors', () => {
      shallow(<CaughtPokemon pokemon={pokemon}/>);
    });
    it('displays name', () => {
      const component = shallow(<CaughtPokemon pokemon={pokemon}/>);
      expect(component.find('p')).toHaveLength(1);
      expect(component.find('p').text()).toEqual(pokemon.pokemonName);
    });
    it('displays image', () => {
      const component = shallow(<CaughtPokemon pokemon={pokemon}/>);
      expect(component.find('img')).toHaveLength(1);
      expect(component.find('img').prop('src')).toEqual(pokemon.sprite);
    });
  });
});

