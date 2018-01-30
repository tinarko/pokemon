import {createStore} from 'redux';
import {combineReducers} from 'redux';

import pokemon from './reducers/pokemon.js';


const allReducers = combineReducers({
  pokemon
});

export default createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());