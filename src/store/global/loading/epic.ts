import * as errorActions from '@iherb-containers/error/actions';
import { IEpic } from '@iherb-helpers';
import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, concat, filter, map } from 'rxjs/operators';

import * as loading from './actions';

const open: IEpic<any> = action$ =>
  action$.pipe(
    filter(action => action.type && action.type.endsWith('load.start')),
    map(action => {
      wx.showNavigationBarLoading();
      return loading.open(action.type.replace('load.start', '').trim());
    }),
    catchError((e, source$) => of(errorActions.capture(e)).pipe(concat(source$))));

const close: IEpic<any> = action$ =>
  action$.pipe(
    filter(
      action =>
        action.type &&
        (action.type.endsWith('load.done') ||
          action.type.endsWith('load.error'))
    ),
    map(action => {
      wx.hideNavigationBarLoading();
      return loading.close(
        action.type
          .replace('load.done', '')
          .replace('load.error', '')
          .trim()
      );
    }),
    catchError((e, source$) => of(errorActions.capture(e)).pipe(concat(source$))));

export const epic = combineEpics(open, close);
