import type { Stream } from "./streams";

export type Subscriber<T> = () => Generator<void, void, T>;

export const subscribe = <T>(
  source: () => Stream<T>,
  subscriber: Subscriber<T>
) => {
  const streamGenerator = source();
  const subscriberGenerator = subscriber();

  const unsubscribe = () => {
    streamGenerator.return();
    subscriberGenerator.return();
  };

  subscriberGenerator.next();

  (async () => {
    try {
      for await (const value of streamGenerator) {
        const { done } = subscriberGenerator.next(value);

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
