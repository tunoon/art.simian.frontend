import Taro from '@tarojs/taro';

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

reducer.on(actions.login.init, state =>
  produce(state, draft => {
    try {
      const value = Taro.getStorageSync('[global.login]');
      if (value) {
        draft.isLogined = value.isLogined;
        draft.token = value.token;
      }
    } catch (e) {
      console.log(e);
      // Do something when catch error
    }
  })
);

reducer.on(actions.login.done, (state, payload) =>
  produce(state, draft => {
    try {
      Taro.setStorageSync('[global.login]', {
        isLogined: true,
        token: payload.token
      });
    } catch (e) {}

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
