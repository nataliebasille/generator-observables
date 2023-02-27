import { Stream } from "../../streams";

export const collect = async <T>(stream: Stream<T>) => {
  const result: T[] = [];
  for await (const value of stream) {
    result.push(value);
  }
  return result;
};
