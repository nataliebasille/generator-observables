export type Stream<T> = () => Generator<T, void> | AsyncGenerator<T, void>;
