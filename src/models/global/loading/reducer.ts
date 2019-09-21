import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

export interface IState {
  show: boolean;
  list: {
    [key: string]: number;
  };
}

const state: IState = {
  show: false,
  list: {}
};

export const reducer = createReducer(state);

reducer.on(actions.open, (state, payload) =>
  produce(state, draft => {
    draft.list[payload] = draft.list[payload] || 0;
    !draft.list[payload] && draft.list[payload]++;

    draft.show = !!Object.keys(draft.list).length;
  })
);

reducer.on(actions.close, (state, payload) =>
  produce(state, draft => {
    if (draft.list[payload]) {
      draft.list[payload]--;

      if (!draft.list[payload]) {
        delete draft.list[payload];
      }
    }

    draft.show = !!Object.keys(draft.list).length;
  })
);
