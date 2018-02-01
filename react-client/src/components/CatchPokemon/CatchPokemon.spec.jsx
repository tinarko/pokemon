import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import CatchPokemon from '../CatchPokemon/CatchPokemon.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<CatchPokemon/>', () => {
  describe('renders properly', () => {
    it('renders without errors', () => {
      shallow(<CatchPokemon />);
    });
    it('renders a form', () => {
      const component = shallow(<CatchPokemon/>);
      expect(component.find('form')).toHaveLength(1);
    });
    it('renders a button', () => {
      const component = shallow(<CatchPokemon/>);
      expect(component.find('button')).toHaveLength(1);
    });
  });
  describe('methods', () => {
    describe('handleChange', () => {
      it('calls updateInputValueOnState when user types pokemon name into form', () => {
        const updateInputValueOnState = jest.fn();
        const component = shallow(
          <CatchPokemon updateInputValueOnState={updateInputValueOnState}/>);
        const pokemonName = 'pikachu';
        component.find('input').simulate('change', {
          target: {
            value: pokemonName
          }
        });
        expect(updateInputValueOnState).toHaveBeenCalled();
        expect(updateInputValueOnState).toHaveBeenCalledWith(pokemonName);
      });
    });
    describe('handleClick', () => {
      it('calls fetch when "Catch" button is clicked', () => {
        const pokemonName = 'clefable';
        const component = shallow(<CatchPokemon pokemonToCatch={pokemonName}/>);
        global.fetch = jest.fn().mockReturnValue(Promise.resolve());

        component.find('button').simulate('click');
        expect(global.fetch).toHaveBeenCalledWith(`pokemon/${pokemonName}`);
      });
      it('calls addPokemonToState when "Catch" button is clicked', () => {
        const pokemonName = 'bulbasaur';
        const data = {
          sprite: 'bulbasaur.img'
        };
         const newPokemon = {
            pokemonName: pokemonName,
            sprite: data.sprite
          };
        const addPokemonToState = jest.fn();
        const component = shallow(<CatchPokemon pokemonToCatch={pokemonName}/>);

        const setDataAndAddPokemonToState = () => {
          addPokemonToState(newPokemon);
          expect(addPokemonToState).toHaveBeenCalled();
          expect(addPokemonToState).toHaveBeenCalledWith(newPokemon);
          return Promise.resolve();
        };

        const resJson = () => {
          return {
            json: () => {
              return Promise.resolve(setDataAndAddPokemonToState(data));
            }
          };
        };

        global.fetch = jest.fn(() => {
          return Promise.resolve(resJson().json());
        });
        component.find('button').simulate('click');
        expect(global.fetch).toHaveBeenCalledWith(`pokemon/${pokemonName}`);
        expect.assertions(3);
      });

    });
    describe('displayCaughtPokemon', () => {
      it('displays no pokemon if none are caught', () => {
        const caughtPokemon = [];
        const component = shallow(<CatchPokemon caughtPokemon={caughtPokemon}/>);
        expect(component.find('CaughtPokemon')).toHaveLength(caughtPokemon.length);
      });
      it('displays the correct number of caught pokemon', () => {
        const caughtPokemon = [
          {
            pokemonName: 'pikachu',
            sprite: 'pikachu.img'
          },
          {
            pokemonName: 'clefable',
            sprite: 'clefabe.img'
          }
        ];
        const component = shallow(<CatchPokemon caughtPokemon={caughtPokemon}/>);
        expect(component.find('CaughtPokemon')).toHaveLength(caughtPokemon.length);
      });
    });
  });
});
