import Logged from "./isLogged";
import CounterReducer from "./counter";

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    Logged: Logged,
    CounterReducer: CounterReducer

});

export default AllReducers;