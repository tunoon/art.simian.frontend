import { createAction } from '@library/redux-act';
// import { IState } from './reducer';

const path = 'my-account';

export interface IParams {
  code: string;
  encryptedData?: string;
  iv?: string;
  signature?: string;
}

export const login = {
  start: createAction(`[${path}] login.start`).withPayload<IParams>(),
  done: createAction(`[${path}] login.done`).withPayload<any>(),
  error: createAction(`[${path}] login.error`)
};
