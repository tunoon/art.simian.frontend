import { createAction } from '@library/redux-act';
import { IAddress } from '@pages/address/models';

const path = 'pages/address/list';

export const load = {
  start: createAction(`[${path}] load.start`),
  done: createAction(`[${path}] load.done`).withPayload<IAddress[]>(),
  error: createAction(`[${path}] load.error`)
};
