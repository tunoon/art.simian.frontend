import { catchError, concat, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { IEpic } from '@common/helpers';
import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const login: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.login.start.type),
    switchMap(action =>
      from(api.user.login({ ...action.payload })).pipe(
        mergeMap(response => of(actions.login.done(response)))
      )
    ),
    catchError((e, source$) =>
      of(actions.login.error(), errorActions.capture(e)).pipe(concat(source$))
    )
  );

export const epic = combineEpics(login);
