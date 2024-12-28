import type { Stream } from './streams';

export type Observer<T> = Generator<void, void, T>;
export type ObserverFactory<T> = () => Observer<T>;

export function subscribe<T>(source: Stream<T>) {
  return (observerFactory: ObserverFactory<T>) => {
    const stream = source();
    const observer = subscribeableObserver(observerFactory);

    const unsubscribe = async () => {
      observer.return();
      stream.return();
    };

    observer.next();

    (async () => {
      try {
        for await (const value of stream) {
          const { done } = observer.next(value);

          if (done) {
            break;
          }
        }
      } finally {
        unsubscribe();
      }
    })();

    return unsubscribe;
  };
}

function* subscribeableObserver<T>(factory: ObserverFactory<T>) {
  const observer: Observer<T> = factory();
  let value: IteratorResult<void, void> = observer.next();

  try {
    do {
      if (value.done) {
        break;
      }

      value = observer.next(yield);
    } while (true);
  } finally {
    observer.return();
  }
}
