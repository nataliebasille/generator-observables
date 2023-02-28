import { Stream } from "../../streams";
import { Operator } from "../operator";

export function reduce<T>(
  reducer: (accumulator: T, value: T, index: number) => T
): Operator<T, T>;
export function reduce<T, A>(
  reducer: (accumulator: A, value: T, index: number) => A,
  initialValue: A
): Operator<T, A>;

export function reduce<T, A>(
  reducer: (accumulator: A, value: T, index: number) => A,
  initialValue?: A
) {
  const hasInitialValue = arguments.length !== 1;
  return (stream: Stream<T>) => {
    return (async function* () {
      let index = 0;
      let accumulator: A = initialValue as A;
      for await (const value of stream) {
        if (!hasInitialValue && index === 0) {
          accumulator = value as unknown as A;
        } else {
          accumulator = reducer(accumulator, value, index);
        }
        yield accumulator;
        index++;
      }

      if (index === 0 && hasInitialValue) {
        yield initialValue;
      }
    })();
  };
}
