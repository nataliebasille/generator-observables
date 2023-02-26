import type { Stream } from "../../streams";

export const debounce = (duration: number) => {
  return <T>(stream: Stream<T>) => {
    return (async function* () {
      let timerId: NodeJS.Timeout | undefined = undefined;
      let reject: () => void = () => ({});
      try {
        let quit = false;
        let value: T | undefined = undefined;
        let resolve: () => void = () => ({});
        (async () => {
          for await (const item of stream) {
            if (timerId) {
              clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
              resolve && resolve();
            }, duration);
            value = item;
          }

          resolve && resolve();
          quit = true;
        })();

        while (true) {
          if (value === undefined) {
            await new Promise<void>((res, rej) => {
              resolve = res;
              reject = rej;
            });
          }

          if (value) {
            yield value as T;
          }

          value = undefined;

          if (quit) {
            break;
          }
        }
      } finally {
        timerId && clearTimeout(timerId);
        reject();
      }
    })();
  };
};
