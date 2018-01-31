import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import Trainer from '../Trainer/Trainer.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Trainer />', () => {
  describe('renders properly',  () => {
    it('renders without errors', () => {
      shallow(<Trainer />);
    });
  });
});