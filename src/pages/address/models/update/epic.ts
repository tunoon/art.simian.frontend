import { catchError, concat, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { IEpic } from '@common/helpers';

import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';
import { load } from '../list/actions';

const update: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.update.start.type),
    switchMap(action => {
      console.log(action.payload);
      return from(api.address.updateAddress(action.payload)).pipe(
        mergeMap(() => of(actions.update.done(), load.start()))
      );
    }),
    catchError((e, source$) => {
      return of(actions.update.error(), errorActions.capture(e)).pipe(
        concat(source$)
      );
    })
  );

export const epic = combineEpics(update);
