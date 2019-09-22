import { combineEpics } from 'redux-observable';

import { epic as load } from './list/epic';
import { epic as create } from './create/epic';
import { epic as update } from './update/epic';
import { epic as omit } from './omit/epic';

export const epic = combineEpics(load, create, update, omit);
