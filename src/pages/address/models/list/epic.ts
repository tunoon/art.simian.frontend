import { catchError, concat, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { IEpic } from '@common/helpers';
import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const list: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.load.start.type),
    switchMap(() =>
      from(api.address.getAddressList()).pipe(
        mergeMap(response => of(actions.load.done(response)))
      )
    ),
    catchError((e, source$) =>
      of(actions.load.error(), errorActions.capture(e)).pipe(concat(source$))
    )
  );

export const epic = combineEpics(list);
