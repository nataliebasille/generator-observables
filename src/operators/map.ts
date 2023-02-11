import type { Operator } from "./operator";

export const map = <TInput, TOutput>(
  mapFn: (value: TInput) => TOutput
): Operator<TInput, TOutput> => {
  return (input) => {
    return async function* () {
      for await (const value of input()) {
        yield mapFn(value);
      }
    };
  };
};
