import {createStore} from 'redux';
import {combineReducers} from 'redux';

import catchPokemon from './reducers/catchPokemon.js';


const allReducers = combineReducers({
  catchPokemon
});

export default createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());