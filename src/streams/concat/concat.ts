import { Stream } from '../stream';

export function concat<T>(...streams: Stream<T>[]) {
  return async function* () {
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];

      yield* stream();
    }
  };
}
