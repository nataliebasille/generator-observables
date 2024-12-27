import { Stream } from '../../streams';

export function find<T>(predicate: (value: T) => boolean) {
  return (stream: Stream<T>) => {
    return new Promise<T | undefined>((resolve) => {
      (async () => {
        for await (const value of stream()) {
          if (predicate(value)) {
            resolve(value);
            break;
          }
        }

        resolve(undefined);
      })();
    });
  };
}
