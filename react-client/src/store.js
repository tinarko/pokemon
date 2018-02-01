import {createStore} from 'redux';
import {combineReducers} from 'redux';

import pokemon from './reducers/pokemon.js';
import trainers from './reducers/trainers.js';


const allReducers = combineReducers({
  pokemon,
  trainers
});

export default createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());