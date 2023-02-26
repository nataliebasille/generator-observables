import { Operator } from "../operate";

export const filter = <T>(predicate: (value: T) => boolean): Operator<T, T> => {
  return (stream) => {
    return (async function* () {
      for await (const value of stream) {
        if (predicate(value)) {
          yield value;
        }
      }
    })();
  };
};
