import { combineReducers } from 'redux';
import { reducer as homepage } from '@pages/homepage/models/reducer';
import { reducer as myAccount } from '@pages/my-account/models/reducer';
import { reducer as address } from '@pages/address/models/list/reducer';

export const reducer = combineReducers({ homepage, myAccount, address });
