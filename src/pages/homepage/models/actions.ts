import { createAction } from '@library/redux-act';
import { IState } from './reducer';

const path = 'homepage';

export const fetch = createAction(`[${path}] fetch`).withPayload<any>();

export const load = {
  start: createAction(`[${path}] load.start`).withPayload<any>(),
  done: createAction(`[${path}] load.done`).withPayload<IState>(),
  error: createAction(`[${path}] load.error`)
};

export const clean = createAction(`[${path}] clean`);
