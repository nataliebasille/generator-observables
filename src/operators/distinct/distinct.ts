import type { Stream } from "../../streams/stream";

export const distinct = <T>(hash?: (value: T) => unknown) => {
  return (stream: Stream<T>) => {
    return (async function* () {
      const seen = new Set();
      for await (const value of stream) {
        const key = hash ? hash(value) : value;
        if (!seen.has(key)) {
          yield value;
          seen.add(key);
        }
      }
    })();
  };
};
