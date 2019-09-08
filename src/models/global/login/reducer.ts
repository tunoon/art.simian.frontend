import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

export interface IState {
  [key: string]: boolean;
}

const state: IState = {};

export const reducer = createReducer(state);

// reducer.on(actions.login.start, state => produce(state, draft => {}));

reducer.on(actions.login.done, (state, payload) =>
  produce(state, draft => {
    const keys = Object.keys(payload);
    keys.map(key => {
      draft[key] = payload[key];
    });
  })
);

// reducer.on(actions.login.error, state => produce(state, draft => {}));
