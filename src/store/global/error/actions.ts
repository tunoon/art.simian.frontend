import { createAction } from '@library/redux-act';

const path = 'store/global/error';

export const capture = createAction(`[${path}] capture`).withPayload<any>();
