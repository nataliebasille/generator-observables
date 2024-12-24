export function from<T>(source: Iterable<T>) {
  return function* () {
    yield* source;
  };
}
