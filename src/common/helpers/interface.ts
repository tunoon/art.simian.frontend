import { Action, Reducer } from 'redux';
import { Epic } from 'redux-observable';
import { reducer } from '@models/reducer';
import { createClient } from '@api';

export type IState = IReducer<typeof reducer>;

export interface IDependencies {
  api: ReturnType<typeof createClient>;
}

export type IEpic<T extends Action> = Epic<T, T, any, IDependencies>;

interface IReducerMap {
  [key: string]: Reducer<any>;
}

export type IReducer<R extends IReducerMap> = {
  [P in keyof R]: ReturnType<R[P]>;
};
