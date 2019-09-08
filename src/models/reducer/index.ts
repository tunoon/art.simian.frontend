import { combineReducers } from 'redux';

import { reducer as homepage } from '@pages/homepage/models/reducer';
import { reducer as auth } from '../global/auth/reducer';

const global = combineReducers({ auth });
const pages = combineReducers({ homepage });

export const reducer = {
  global,
  pages
};
