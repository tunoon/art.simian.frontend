import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

const state: any = {};

export const reducer = createReducer(state);

reducer.on(actions.login.start, state =>
  produce(state, draft => {
    draft.loading = true;
  })
);

reducer.on(actions.login.done, (state, payload) => produce(state, draft => {}));

reducer.on(actions.login.error, state => produce(state, draft => {}));
