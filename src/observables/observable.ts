export type Observable<T> = () => AsyncGenerator<T, void, void>;
