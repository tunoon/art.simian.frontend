interface Type<T extends string> {
  type: T;
}

interface Payload<P extends any> {
  payload: P;
}

interface Meta<M extends any> {
  meta: M;
}

export interface Action<T extends string> extends Type<T> {}

export interface ActionWithPayload<T extends string, P extends any>
  extends Type<T>,
  Payload<P> {}

export interface ActionWithMeta<T extends string, M extends any> extends Type<T>, Meta<M> {}

export interface ActionWithPayloadAndMeta<T extends string, P extends any, M extends any>
  extends Type<T>,
  Payload<P>,
  Meta<M> {}

export interface ActionCreator<T extends string> extends Type<T> {
  withPayload: <P>() => ActionWithPayloadCreator<T, P>;
  withMeta: <M>(meta: M) => ActionWithMetaCreator<T, M>;

  (): Action<T>;
}

export interface ActionWithPayloadCreator<T extends string, P extends any> extends Type<T> {
  withMeta: <M>(
    reducer: MetaReducer<M>
  ) => ActionWithPayloadAndMetaCreator<T, P, M>;

  (payload: P): ActionWithPayload<T, P>;
}

export interface ActionWithMetaCreator<T extends string, M extends any> extends Type<T> {
  (): ActionWithMeta<T, M>;
}

export interface ActionWithPayloadAndMetaCreator<T extends string, P extends any, M extends any>
  extends Type<T> {
  (payload: P): ActionWithPayloadAndMeta<T, P, M>;
}

export interface MetaReducer<M extends any> {
  <P>(payload: P): M;
}

const createActionWithPayloadAndMeta = <T extends string, P extends any, M extends any>(
  type: T,
  reducer: MetaReducer<M>
): ActionWithPayloadAndMetaCreator<T, P, M> => {
  const actionCreator = (payload: P) => ({
    type,
    payload,
    meta: reducer(payload)
  });

  return Object.assign(actionCreator, {
    type
  });
};

const createActionWithPayload = <T extends string, P extends any>(
  type: T
): ActionWithPayloadCreator<T, P> => {
  const actionCreator = (payload: P) => ({
    type,
    payload
  });

  return Object.assign(actionCreator, {
    type,
    withMeta: <M extends any>(reducer: MetaReducer<M>) =>
      createActionWithPayloadAndMeta<T, P, M>(type, reducer)
  });
};

const createActionWithMeta = <T extends string, M extends any>(
  type: T,
  meta: M
): ActionWithMetaCreator<T, M> => {
  const actionCreator = () => ({
    type,
    meta
  });

  return Object.assign(actionCreator, {
    type
  });
};

export const createAction = <T extends string>(type: T): ActionCreator<T> => {
  const actionCreator = () => ({
    type
  });

  return Object.assign(actionCreator, {
    type,
    withPayload: <P extends any>() => createActionWithPayload<T, P>(type),
    withMeta: <M extends any>(meta: M) => createActionWithMeta<T, M>(type, meta)
  });
};
