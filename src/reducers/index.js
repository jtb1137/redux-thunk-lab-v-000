import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

/*
Turns an object whose values are different reducing functions into a single 
reducing function you can pass to createStore - Redux Docs
*/
const rootReducer = combineReducers({
    cats: catsReducer
});

export default rootReducer;