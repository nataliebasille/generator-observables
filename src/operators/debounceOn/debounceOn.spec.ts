import fakeTimers from '@sinonjs/fake-timers';

import { pipe } from '../../pipe/pipe';
import { collect } from '../../terminators/collect/collect';
import { debounceOn } from './debounceOn';

describe('debounceOn', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should not emit values until debounce stream emits a value', async () => {
    const debounceStream = async function* () {
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 'debounce emit';
    };

    const stream = async function* () {
      yield 1;
      yield 2;
      yield 3;
      await new Promise((resolve) => setTimeout(resolve, 500));
      yield 4;
    };
    const result = pipe(stream, debounceOn(debounceStream), collect);
    await clock.tickAsync(1000);
    expect(result).resolves.toEqual([3]);
  });
});
