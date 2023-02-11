export type StreamFactory<T> = () => AsyncGenerator<T, void, void>;
export type Stream<T> = ReturnType<StreamFactory<T>>;
