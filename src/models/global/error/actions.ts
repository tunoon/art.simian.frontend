import { createAction } from '@library/redux-act';

const path = 'models/global/error';

export const capture = createAction(`[${path}] capture`).withPayload<any>();
