import { createAction } from '@iherb-library/redux-act';

export const open = createAction('[loading] open').withPayload<string>();
export const close = createAction('[loading] close').withPayload<string>();
