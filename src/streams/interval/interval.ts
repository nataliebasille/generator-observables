export function interval(every: number) {
  return async function* () {
    let i = 0;
    let timer;

    try {
      while (true) {
        yield await new Promise<number>((resolve) => {
          timer = setTimeout(() => {
            resolve(i++);
          }, every);
        });
      }
    } finally {
      if (timer) {
        clearTimeout(timer);
      }
    }
  };
}
