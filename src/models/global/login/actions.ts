import { createAction } from '@library/redux-act';
import { IState } from './reducer';

const path = 'root';

export const login = {
  start: createAction(`[${path}] login.start`).withPayload<IState>(),
  done: createAction(`[${path}] login.done`).withPayload<IState>(),
  error: createAction(`[${path}] login.error`)
};
