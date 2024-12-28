import { Stream } from '../../streams';
import { pipe } from '../../pipe/pipe';
import { take } from '../take/take';
import { subscribe } from '../../subscribe';

export function repeatUntil(notifier: Stream<unknown>) {
  return <T>(stream: Stream<T>) => {
    return async function* () {
      let done = false;
      const unsubscribe = subscribe(pipe(notifier, take(1)))(function* () {
        try {
          yield;
        } finally {
          done = true;
        }
      });

      try {
        while (!done) {
          for await (const value of stream()) {
            yield value;
          }
        }
      } finally {
        unsubscribe();
      }
    };
  };
}
