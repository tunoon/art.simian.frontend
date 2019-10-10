import { combineReducers } from 'redux';
import { reducer as auth } from '../global/auth/reducer';
import { reducer as login } from '../global/login/reducer';
import { reducer as loading } from '../global/loading/reducer';

export const reducer = combineReducers({ auth, login, loading });
