import { catchError, concat, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { IEpic } from '@common/helpers';

import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';
import { load } from '../list/actions';

const create: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.create.start.type),
    switchMap(action => {
      return from(api.address.createAddress(action.payload)).pipe(
        mergeMap(() => of(actions.create.done(), load.start()))
      );
    }),
    catchError((e, source$) => {
      return of(actions.create.error(), errorActions.capture(e)).pipe(
        concat(source$)
      );
    })
  );

export const epic = combineEpics(create);
