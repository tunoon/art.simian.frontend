import {
  Action,
  ActionCreator,
  ActionWithMetaCreator,
  ActionWithPayload,
  ActionWithPayloadAndMetaCreator,
  ActionWithPayloadCreator
} from './createAction';

export interface Reducer<S extends any> {
  on: On<S>;

  <T extends string>(state: S, action: Action<T>): S;

  <T extends string, P>(state: S, action: ActionWithPayload<T, P>): S;
}

export type Handler<S> = (state: S) => S;
export type HandlerWithPayload<S, P> = (state: S, payload: P) => S;

export interface On<S extends any> {
  <T extends string, P>(
    action: ActionWithPayloadCreator<T, P>,
    handler: HandlerWithPayload<S, P>
  ): void;

  <T extends string, P, M>(
    action: ActionWithPayloadAndMetaCreator<T, P, M>,
    handler: HandlerWithPayload<S, P>
  ): void;

  <T extends string>(action: ActionCreator<T>, handler: Handler<S>): void;

  <T extends string, M>(
    action: ActionWithMetaCreator<T, M>,
    handler: Handler<S>
  ): void;
}

export const createReducer = <S extends any>(initialState: S): Reducer<S> => {
  const handlers = {};

  const reducer = <T extends string, P>(
    state = initialState,
    action: Action<T> | ActionWithPayload<T, P>
  ) => {
    const handler = handlers[action.type as string];
    if (handler) {
      if ('payload' in action) {
        return handler(state, action.payload);
      }
      return handler(state);
    }

    return state;
  };

  const on = <T extends string, P, M>(
    action:
      | ActionWithMetaCreator<T, M>
      | Action<T>
      | ActionWithPayloadCreator<T, P>,
    handler: Handler<S> | HandlerWithPayload<S, P>
  ) => {
    handlers[action.type as string] = handler;
  };

  return Object.assign(reducer, {
    on
  });
};
