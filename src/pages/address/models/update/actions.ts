import { createAction } from '@library/redux-act';
import { IAddress } from '@pages/address/models';

const path = 'pages/address/update';

export const update = {
  start: createAction(`[${path}] update.start`).withPayload<IAddress>(),
  done: createAction(`[${path}] update.done`),
  error: createAction(`[${path}] update.error`)
};
