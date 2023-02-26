import { Stream } from "../../streams/stream";
import { Operator } from "../operate";

export const map = <TIn, TOut>(
  fn: (value: TIn, index: number) => TOut
): Operator<TIn, TOut> => {
  return (stream: Stream<TIn>) => {
    return (async function* () {
      let index = 0;
      for await (const value of stream) {
        yield fn(value, index++);
      }
    })();
  };
};
