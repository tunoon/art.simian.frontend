import { combineEpics } from 'redux-observable';

import { epic as global } from './global';
import { epic as pages } from './pages';

export const epic = combineEpics(global, pages);
