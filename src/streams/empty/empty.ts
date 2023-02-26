import { Stream } from "../stream";

export const empty = <T>(): Stream<T> => {
  return (async function* () {
    yield* [];
  })();
};
