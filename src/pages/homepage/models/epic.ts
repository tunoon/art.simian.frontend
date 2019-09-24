import { catchError, concat, map, mergeMap, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { IEpic } from '@common/helpers';
import * as errorActions from '@models/global/error/actions';
import * as actions from './actions';

const fetch: IEpic<any> = action$ =>
  action$.pipe(
    ofType(actions.fetch.type),
    map(action => actions.load.start(action.payload))
  );

const load: IEpic<any> = (action$, state$, { api }) =>
  action$.pipe(
    ofType(actions.load.start.type),
    switchMap(action =>
      from(api.address.getAddressList()).pipe(
        mergeMap(response => of(actions.load.done(response)))
      )
    ),
    catchError((e, source$) =>
      of(actions.load.error(), errorActions.capture(e)).pipe(concat(source$))
    )
  );

export const epic = combineEpics(fetch, load);
