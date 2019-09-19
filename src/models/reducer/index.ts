import { combineReducers } from 'redux';

import { reducer as homepage } from '@pages/homepage/models/reducer';
import { reducer as myAccount } from '@pages/my-account/models/reducer';

import { reducer as auth } from '../global/auth/reducer';
import { reducer as login } from '../global/login/reducer';

const global = combineReducers({ auth, login });
const pages = combineReducers({ homepage, myAccount });

export const reducer = {
  global,
  pages
};
