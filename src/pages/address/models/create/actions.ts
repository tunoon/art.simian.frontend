import { createAction } from '@library/redux-act';
import { IAddress } from '../interface';

const path = 'pages/address/create';

export const create = {
  start: createAction(`[${path}] create.start`).withPayload<IAddress>(),
  done: createAction(`[${path}] create.done`),
  error: createAction(`[${path}] create.error`)
};
