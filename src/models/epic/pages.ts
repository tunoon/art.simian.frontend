import { combineEpics } from 'redux-observable';
import { epic as homepage } from '@pages/homepage/models/epic';
import { epic as myAccount } from '@pages/my-account/models/epic';
import { epic as address } from '@pages/address/models/epic';

export const epic = combineEpics(homepage, myAccount, address);
