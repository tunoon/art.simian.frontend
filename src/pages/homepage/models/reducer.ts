import { createReducer } from '@library/redux-act';
import produce from 'immer';
import * as actions from './actions';

export interface ITracking {
  comments: string;
  location: string;
  time: string;
  statusCode: string;
}

export interface IState {
  name: string;
  src: string;
  status: number;
  statusText: object;
  trackingNumber: string;
  url: string;
  list: ITracking[];
  loading?: boolean;
}

const state: IState = {
  name: '',
  src: '',
  status: -1,
  statusText: {},
  url: '',
  trackingNumber: '',
  list: [],
  loading: false
};

export const reducer = createReducer(state);

reducer.on(actions.load.start, state =>
  produce(state, draft => {
    draft.loading = true;
  })
);

reducer.on(actions.load.done, (state, payload) =>
  produce(state, draft => {
    const {
      name,
      src,
      status,
      statusText,
      url,
      trackingNumber,
      list
    } = payload;
    draft.name = name;
    draft.src = src;
    draft.status = status;
    draft.statusText = statusText;
    draft.url = url;
    draft.trackingNumber = trackingNumber;
    draft.list = list;
    draft.loading = false;
  })
);

reducer.on(actions.load.error, state =>
  produce(state, draft => {
    draft.loading = false;
  })
);

reducer.on(actions.clean, state =>
  produce(state, draft => {
    draft.name = '';
    draft.src = '';
    draft.status = -1;
    draft.statusText = {};
    draft.trackingNumber = '';
    draft.list = [];
  })
);
