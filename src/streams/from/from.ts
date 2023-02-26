import { Stream } from "../stream";

export const from = <T>(source: Iterable<T>): Stream<T> => {
  return (async function* () {
    yield* source;
  })();
};
