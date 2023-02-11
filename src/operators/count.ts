import type { Operator } from "./operator";

export const count = <T>(): Operator<T, number> => {
  return (input) => {
    return async function* () {
      let i = 0;
      for await (const _ of input()) {
        i++;
      }
      yield i;
    };
  };
};
