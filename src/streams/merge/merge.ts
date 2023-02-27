import { Stream } from "../stream";

export const merge = <T>(...streams: Stream<T>[]): Stream<T> => {
  return (async function* () {
    const promises = streams.map((stream, index) =>
      stream.next().then((result) => [result, stream, index] as const)
    );
    while (promises.length > 0) {
      const [result, stream, index] = await Promise.race(promises);
      if (result.done) {
        promises.splice(index, 1);
      } else {
        yield result.value;
        promises[index] = stream
          .next()
          .then((result) => [result, stream, index] as const);
      }
    }
  })();
};
