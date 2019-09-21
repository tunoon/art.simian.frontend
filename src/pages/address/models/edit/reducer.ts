import { createReducer } from '@library/redux-act';
import produce from 'immer';

import * as actions from './actions';

import { IAddress } from '../../interface';

export interface IState {
  list: IAddress[];
}

const state: IState = {
  list: []
};

export const reducer = createReducer(state);

reducer.on(actions.edit.start, state => produce(state, draft => {}));

reducer.on(actions.edit.done, (state, payload) => produce(state, draft => {}));

reducer.on(actions.edit.error, state => produce(state, draft => {}));
