import { Stream } from '../../streams';

export function repeat<T>(count?: number) {
  count = count ?? Infinity;

  return <T>(stream: Stream<T>) => {
    return async function* () {
      for (let i = 0; i < count; i++) {
        for await (const value of stream()) {
          yield value;
        }
      }
    };
  };
}
