import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { CatchPokemon } from './CatchPokemon.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<CatchPokemon/ >', () => {
  it('renders without errors', () => {
    shallow(<CatchPokemon />);
  })
});
