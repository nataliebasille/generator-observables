export const subject = <T>() => {
  let resolve: (value: T) => void;
  const next = (value: T) => {
    resolve(value);
  };

  return {
    next,
    [Symbol.asyncIterator]: async function* () {
      while (true) {
        const nextValue = await new Promise<T>((r) => {
          resolve = r;
        });

        yield nextValue;
      }
    },
  };
};
