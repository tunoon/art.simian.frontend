import { createAction } from '@library/redux-act';
import { IState } from './reducer';

const path = 'global/login';

export interface IParams {
  code: string;
  userInfo: {
    avatarUrl: string;
    gender: string;
    nickName: string;
  };
}

export const login = {
  init: createAction(`[${path}] login.init`),
  start: createAction(`[${path}] login.start`).withPayload<IParams>(),
  done: createAction(`[${path}] login.done`).withPayload<any>(),
  error: createAction(`[${path}] login.error`)
};
