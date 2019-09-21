import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

import { IAddress } from '../../interface';

export interface IState {
  data: IAddress[];
  loading: boolean;
}

const state: IState = {
  data: [],
  loading: false
};

export const reducer = createReducer(state);

reducer.on(actions.load.start, state =>
  produce(state, draft => {
    draft.loading = true;
    draft.data = [];
  })
);

reducer.on(actions.load.done, (state, payload) =>
  produce(state, draft => {
    draft.loading = false;
    draft.data = payload;
  })
);

reducer.on(actions.load.error, state =>
  produce(state, draft => {
    draft.loading = false;
    draft.data = [];
  })
);
