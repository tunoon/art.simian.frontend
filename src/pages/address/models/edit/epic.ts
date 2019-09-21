import { catchError, concat, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { IEpic } from '@common/helpers';

import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const edit: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.edit.start.type),
    switchMap(action => {
      console.log(action.payload);
      return from(api.address.createAddress(action.payload)).pipe(
        mergeMap(response => of(actions.edit.done(response)))
      );
    }),
    catchError((e, source$) => {
      return of(actions.edit.error(), errorActions.capture(e)).pipe(
        concat(source$)
      );
    })
  );

export const epic = combineEpics(edit);
