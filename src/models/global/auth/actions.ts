// wechat auth
import { createAction } from '@library/redux-act';
import { IState } from './reducer';

const path = 'global/auth';

export const auth = {
  start: createAction(`[${path}] auth.start`).withPayload<IState>(),
  done: createAction(`[${path}] auth.done`).withPayload<IState>(),
  error: createAction(`[${path}] auth.error`)
};