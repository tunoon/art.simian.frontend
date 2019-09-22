import { createAction } from '@library/redux-act';

const path = 'pages/address/omit';

export const omit = {
  start: createAction(`[${path}] omit.start`).withPayload<{ id: string }>(),
  done: createAction(`[${path}] omit.done`),
  error: createAction(`[${path}] omit.error`)
};
