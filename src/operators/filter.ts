import type { Operator } from "./operator";

export const filter = <T>(predicate: (value: T) => boolean): Operator<T, T> => {
  return (input) => {
    return async function* () {
      for await (const value of input()) {
        if (predicate(value)) {
          yield value;
        }
      }
    };
  };
};
