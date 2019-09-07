import { combineEpics } from 'redux-observable';

import { epic as error } from '../global/error/epic';
import { epic as authSetting } from '../global/auth-setting/epic';
import { epic as pages } from './pages';

export const epic = combineEpics(error, authSetting, pages);
