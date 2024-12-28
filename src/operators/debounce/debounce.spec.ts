import fakeTimers from '@sinonjs/fake-timers';

import { debounce } from './debounce';
import { subscribe } from '../../subscribe';
import { pipe } from '../../pipe/pipe';

describe('debounce', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should debounce the input generator and emit the last value after the specified time has passed', async () => {
    async function* inputGenerator() {
      yield 1;
      await new Promise((resolve) => setTimeout(resolve, 250));
      yield 2;
      await new Promise((resolve) => setTimeout(resolve, 50));
      yield 3;
    }

    const debounceSource = pipe(inputGenerator, debounce(200));

    const values: number[] = [];

    const unsubscribe = subscribe(debounceSource)(function* () {
      while (true) {
        values.push(yield);
      }
    });

    expect(values).toEqual([]);

    await clock.tickAsync(100);
    expect(values).toEqual([]);

    await clock.tickAsync(200);
    expect(values).toEqual([1]);

    await clock.tickAsync(300);
    expect(values).toEqual([1, 3]);

    unsubscribe();
  });
});
