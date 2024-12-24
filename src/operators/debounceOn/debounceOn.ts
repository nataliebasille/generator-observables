import { Stream } from '../../streams/stream';
import { subscribe } from '../../subscribe';

const NO_VALUE: unique symbol = Symbol('NO_VALUE');

export function debounceOn(debounceStream: Stream<unknown>) {
  return <T>(stream: Stream<T>) => {
    return async function* () {
      let currentValue: T | typeof NO_VALUE = NO_VALUE;
      const unsubscribe = subscribe(stream)(function* () {
        currentValue = yield;
      });

      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for await (const _ of debounceStream()) {
          if (currentValue !== NO_VALUE) {
            yield currentValue;
            currentValue = NO_VALUE;
          }
        }
      } finally {
        unsubscribe();
      }
    };
  };
}
