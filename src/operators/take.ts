import type { Operator } from "./operator";

export const take = <T>(count: number): Operator<T, T> => {
  return (input) => {
    return async function* () {
      let i = 0;
      for await (const value of input()) {
        yield value;
        i++;
        if (i >= count) {
          break;
        }
      }
    };
  };
};
