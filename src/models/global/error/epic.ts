import { combineEpics, ofType } from 'redux-observable';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEpic } from '@common/helpers';
import * as errorActions from './actions';

const capture: IEpic<any> = action$ =>
  action$.pipe(
    ofType(errorActions.capture.type),
    switchMap(action => {
      const err = action.payload;
      const actions = [];
      console.error(err);
      return from(actions);
    })
  );

export const epic = combineEpics(capture);
