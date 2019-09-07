import { catchError, concat, map, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { IEpic } from '@common/helpers';

import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const authSetting: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.authSetting.start.type),
    switchMap(action => of(actions.authSetting.done(action.payload))),
    catchError((e, source$) => {
      return of(actions.authSetting.error(), errorActions.capture(e)).pipe(
        concat(source$)
      );
    })
  );

export const epic = combineEpics(authSetting);
