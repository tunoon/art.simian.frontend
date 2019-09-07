import { combineReducers } from 'redux';

import { reducer as homepage } from '@pages/homepage/models/reducer';
import { reducer as authSetting } from '../global/auth-setting/reducer';

const global = combineReducers({ authSetting });
const pages = combineReducers({ homepage });

export const reducer = {
  global,
  pages
};
