import { combineEpics } from 'redux-observable';

import { epic as error } from '../global/error/epic';
import { epic as auth } from '../global/auth/epic';
import { epic as login } from '../global/login/epic';
import { epic as loading } from '../global/loading/epic';

export const epic = combineEpics(error, auth, login, loading);
