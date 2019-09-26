import { createAction } from '@library/redux-act';

const path = 'my-account';

export interface IParams {
  code: string;
  encryptedData: string;
  iv: string;
}

export const login = {
  start: createAction(`[${path}] login.start`).withPayload<IParams>(),
  done: createAction(`[${path}] login.done`).withPayload<any>(),
  error: createAction(`[${path}] login.error`)
};
