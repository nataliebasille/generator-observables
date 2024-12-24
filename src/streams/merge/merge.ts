import { subscribe } from '../../subscribe';
import { Stream } from '../stream';

export const merge = <T>(
  ...streams: [Stream<T>, Stream<T>, ...Stream<T>[]]
): Stream<T> => {
  return async function* () {
    const generators = streams.map((s) => {
      const generator = normalize(s);
      return {
        generator,
        promise: generator.next(),
      };
    });

    while (generators.length > 0) {
      const [nextResult, index] = await Promise.race(
        generators.map(({ promise }, index) =>
          promise.then((result) => [result, index] as const)
        )
      );

      if (!nextResult.done) {
        yield nextResult.value;
        generators[index].promise = generators[index].generator.next();
      } else {
        generators.splice(index, 1);
      }
    }
  };
};

async function* normalize<T>(stream: Stream<T>) {
  for await (const value of stream()) {
    yield value;
  }
}
