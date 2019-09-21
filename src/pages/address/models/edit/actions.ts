import { createAction } from '@library/redux-act';
import { IState } from './reducer';

import { IAddress } from "../../interface";

const path = 'pages/address/edit';


export const edit = {
  start: createAction(`[${path}] edit.start`).withPayload<IAddress>(),
  done: createAction(`[${path}] edit.done`).withPayload<any>(),
  error: createAction(`[${path}] edit.error`)
};
