import type { StreamFactory } from "./stream";

export type DuplexStreamReader<T> = StreamFactory<T>;
export type DuplexStreamWriter<T> = (value: T) => void;
export type DuplexStream<T> = [DuplexStreamReader<T>, DuplexStreamWriter<T>];

export const duplexStream = <T>(): DuplexStream<T> => {
  const subscriptions = new Set<(value: T) => void>();
  const next = (value: T) => {
    subscriptions.forEach((resolve) => resolve(value));
  };

  const stream = async function* () {
    let resolve: ((value: T) => void) | undefined = undefined;
    try {
      while (true) {
        const nextValue = await new Promise<T>((r) => {
          resolve = r;
          subscriptions.add(r);
        });

        if (resolve) {
          subscriptions.delete(resolve);
        }

        yield nextValue;
      }
    } finally {
      if (resolve) {
        subscriptions.delete(resolve);
      }
    }
  };

  return [stream, next];
};
