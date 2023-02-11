export type Observer<T> = AsyncGenerator<void, void, T>;
export type ObserverReceivedValue<TObserver extends Observer<any>> =
  TObserver extends Observer<infer TValue> ? TValue : never;
