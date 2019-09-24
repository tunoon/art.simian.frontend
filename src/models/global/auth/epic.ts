import { catchError, concat, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { IEpic } from '@common/helpers';
import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const auth: IEpic<any> = (action$, {}, {}) =>
  action$.pipe(
    ofType(actions.auth.start.type),
    switchMap(action => of(actions.auth.done(action.payload))),
    catchError((e, source$) =>
      of(actions.auth.error(), errorActions.capture(e)).pipe(concat(source$))
    )
  );

export const epic = combineEpics(auth);
