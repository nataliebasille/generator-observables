export function interval(every: number) {
  let isAborted = false;
  let abortController: AbortController | undefined;
  const generator = async function* () {
    isAborted = false;
    abortController = undefined;
    let i = 0;
    while (!isAborted) {
      const result = await new Promise<IteratorResult<number, void>>(
        (resolve) => {
          abortController = new AbortController();
          const timer = setTimeout(() => {
            resolve({ done: false, value: i++ });
          }, every);

          abortController.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            resolve({ done: true, value: undefined });
            isAborted = true;
          });
        }
      );

      if (!result.done) {
        yield result.value;
      }
    }
  };

  return () => {
    const iterator = generator();
    const _oldReturn = iterator.return;
    iterator.return = function (value: undefined) {
      if (abortController) {
        abortController.abort();
      }
      return _oldReturn.call(iterator, value);
    };

    return iterator;
  };
}
