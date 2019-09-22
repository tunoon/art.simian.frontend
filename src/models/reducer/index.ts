import { combineReducers } from 'redux';

import { reducer as homepage } from '@pages/homepage/models/reducer';
import { reducer as myAccount } from '@pages/my-account/models/reducer';
import { reducer as address } from '@pages/address/models/list/reducer';

import { reducer as auth } from '../global/auth/reducer';
import { reducer as login } from '../global/login/reducer';
import { reducer as loading } from '../global/loading/reducer';

const global = combineReducers({ auth, login, loading });
const pages = combineReducers({ homepage, myAccount, address });

export const reducer = {
  global,
  pages
};
