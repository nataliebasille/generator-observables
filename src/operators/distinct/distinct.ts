import { StreamSource } from "../../streams/stream";

export const distinct = <T>(hash?: (value: T) => unknown) => {
  return (source: StreamSource<T>) => {
    return async function* () {
      const stream = source();
      const seen = new Set();
      try {
        for await (const value of stream) {
          const key = hash ? hash(value) : value;
          if (!seen.has(key)) {
            yield value;
            seen.add(key);
          }
        }
      } finally {
        await stream.return();
      }
    };
  };
};
