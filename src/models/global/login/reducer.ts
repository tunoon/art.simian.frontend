import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

export interface IState {
  isLogined: boolean;
  token: string;
}

const state: IState = {
  isLogined: false,
  token: ''
};

export const reducer = createReducer(state);

// reducer.on(actions.login.start, state => produce(state, draft => {}));

reducer.on(actions.login.done, (state, payload) =>
  produce(state, draft => {
    console.log(payload);
    draft.isLogined = true;
    draft.token = payload.token;
  })
);

reducer.on(actions.login.error, state =>
  produce(state, draft => {
    draft.isLogined = false;
    draft.token = '';
  })
);
