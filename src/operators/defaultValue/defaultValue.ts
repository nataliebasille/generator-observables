import { Stream } from '../../streams';

export function defaultValue<T>(value: T) {
  return (stream: Stream<T>) => {
    return async function* () {
      let hasValue = false;
      try {
        for await (const value of stream()) {
          hasValue = true;
          yield value;
        }
      } finally {
        if (!hasValue) {
          yield value;
        }
      }
    };
  };
}
