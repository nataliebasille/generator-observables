import { Stream } from '../stream';

export function share<T>(stream: Stream<T>) {
  let count = 0;
  const consumers: Set<
    (value: IteratorResult<T, void>, signal: AbortSignal) => void
  > = new Set();
  let stop: ReturnType<typeof run> | undefined;
  const run = () => {
    const controller = new AbortController();
    const iterator = stream();

    (async () => {
      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          if (controller.signal.aborted) {
            break;
          }

          const value = await iterator.next();

          for (const consumer of consumers) {
            consumer(value, controller.signal);
          }

          if (value.done) {
            break;
          }
        }
      } finally {
        stop?.();
      }
    })();

    return async () => {
      controller.abort();
      await iterator.return?.();
      stop = undefined;
    };
  };

  return async function* () {
    count++;
    let resolve: (value: IteratorResult<T, void>) => void;
    const consumer = (value: IteratorResult<T, void>, signal: AbortSignal) => {
      if (signal.aborted) {
        resolve({ done: true, value: undefined });
      }
      resolve(value);
    };
    consumers.add(consumer);

    if (!stop) {
      stop = run();
    }

    try {
      while (true) {
        const value = await new Promise<IteratorResult<T, void>>(
          (res) => (resolve = res)
        );

        if (value.done) {
          break;
        }

        yield value.value;
      }
    } finally {
      consumers.delete(consumer);

      if (consumers.size === 0) {
        await stop?.();
      }
    }
  };
}
