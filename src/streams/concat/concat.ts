import { Stream } from "../stream";

export const concat = <T>(...streams: Stream<T>[]): Stream<T> => {
  return (async function* () {
    for (let i = 0; i < streams.length; i++) {
      yield* streams[i];
    }
  })();
};
