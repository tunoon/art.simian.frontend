import { combineReducers } from 'redux';
import { reducer as list } from './list/reducer';

const reducers = { list };

export const reducer = combineReducers(reducers);
