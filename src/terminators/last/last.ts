import { Stream } from "../../streams";

export const last = <T>(predicate?: (value: T) => boolean) => {
  return (stream: Stream<T>): Promise<T | undefined> => {
    return new Promise((resolve) => {
      let result: T | undefined;
      (async () => {
        for await (const value of stream) {
          if (!predicate || predicate(value)) {
            result = value;
          }
        }
        resolve(result);
      })();
    });
  };
};
