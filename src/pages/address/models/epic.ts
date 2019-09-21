import { combineEpics } from 'redux-observable';

import { epic as list } from './list/epic';
import { epic as edit } from './edit/epic';

export const epic = combineEpics(list, edit);
