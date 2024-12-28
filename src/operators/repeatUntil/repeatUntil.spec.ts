import fakeTimers from '@sinonjs/fake-timers';
import { pipe } from '../../pipe/pipe';
import { empty, interval } from '../../streams';
import { take } from '../take/take';
import { repeatUntil } from './repeatUntil';
import { collect } from '../../terminators';

describe('repeatUntil', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should repeat the source stream until the notifier stream emits a value', async () => {
    const notifier = pipe(interval(1000), take(1));

    const stream = async function* () {
      await new Promise((resolve) => setTimeout(resolve, 50));
      yield 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 2;
      await new Promise((resolve) => setTimeout(resolve, 50));
      yield 3;
      await new Promise((resolve) => setTimeout(resolve, 100));
    };

    const result = pipe(stream, repeatUntil(notifier), collect);
    await clock.tickAsync(2000);
    expect(await result).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  it('should repeat the source stream until the notifier stream completes', async () => {
    const notifier = async function* () {
      await new Promise((resolve) => setTimeout(resolve, 50));
      yield* empty();
    };

    const stream = async function* () {
      yield 1;
      yield 2;
      yield 3;
      await new Promise((resolve) => setTimeout(resolve, 25));
    };

    const result = pipe(stream, repeatUntil(notifier), collect);
    await clock.tickAsync(100);
    expect(await result).toEqual([1, 2, 3, 1, 2, 3]);
  });
});
