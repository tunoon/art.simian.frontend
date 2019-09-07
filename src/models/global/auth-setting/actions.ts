import { createAction } from '@library/redux-act';
import { IState } from './reducer';

const path = 'root';

export const authSetting = {
  start: createAction(`[${path}] authSetting.start`).withPayload<IState>(),
  done: createAction(`[${path}] authSetting.done`).withPayload<IState>(),
  error: createAction(`[${path}] authSetting.error`)
};
