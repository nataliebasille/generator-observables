import { Stream } from '../../streams/stream';

export const filter = <T>(predicate: (value: T) => boolean) => {
  return (stream: Stream<T>) => {
    return async function* () {
      for await (const value of stream()) {
        if (predicate(value)) {
          yield value;
        }
      }
    };
  };
};
