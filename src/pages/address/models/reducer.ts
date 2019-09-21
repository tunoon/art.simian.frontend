import { combineReducers } from 'redux';

import { reducer as list } from './list/reducer';
import { reducer as edit } from './edit/reducer';

const reducers = { list, edit };

export const reducer = combineReducers(reducers);
