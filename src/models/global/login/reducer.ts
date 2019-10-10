import Taro from '@tarojs/taro';
import { createReducer } from '@library/redux-act';
import produce from 'immer';
import * as actions from './actions';

export interface IState {
  isLogined: boolean;
  token: string;
  wechatAvatarUrl: string;
  wechatNickname: string;
}

const state: IState = {
  isLogined: false,
  token: '',
  wechatAvatarUrl: '',
  wechatNickname: ''
};

export const reducer = createReducer(state);

reducer.on(actions.login.init, state =>
  produce(state, draft => {
    try {
      const value = Taro.getStorageSync('[global.login]');
      const { isLogined, token, wechatAvatarUrl, wechatNickname } = value;
      if (value) {
        draft.isLogined = isLogined;
        draft.token = token;
        draft.wechatAvatarUrl = wechatAvatarUrl;
        draft.wechatNickname = wechatNickname;
      }
    } catch (e) {
      console.log(e);
      // Do something when catch error
    }
  })
);

reducer.on(actions.login.done, (state, payload) =>
  produce(state, draft => {
    const { token, wechatAvatarUrl, wechatNickname } = payload;
    if (token) {
      try {
        Taro.setStorageSync('[global.login]', {
          isLogined: true,
          token,
          wechatAvatarUrl,
          wechatNickname
        });
      } catch (e) {}
      draft.isLogined = true;
      draft.token = token;
      draft.wechatAvatarUrl = wechatAvatarUrl;
      draft.wechatNickname = wechatNickname;
    }
  })
);

reducer.on(actions.login.error, state =>
  produce(state, draft => {
    draft.isLogined = false;
    draft.token = '';
  })
);
