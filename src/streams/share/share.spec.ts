import fakeTimers from '@sinonjs/fake-timers';

import { take } from '../../operators/take/take';
import { pipe } from '../../pipe/pipe';
import { subscribe } from '../../subscribe';
import { collect } from '../../terminators/collect/collect';
import { interval } from '../interval/interval';
import { share } from './share';

describe('share', () => {
  let clock: ReturnType<typeof fakeTimers.install>;
  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should continue emitting values from the source stream', async () => {
    const stream = share(interval(100));
    const first = pipe(stream, take(10), collect);
    await clock.tickAsync(500);

    const second = pipe(stream, take(5), collect);
    await clock.tickAsync(1000);
    expect(await first).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(await second).toEqual([5, 6, 7, 8, 9]);
  });

  it('should restart stream when the last subscriber unsubscribes', async () => {
    const stream = share(interval(100));
    const first = pipe(stream, take(1), collect);
    await clock.tickAsync(100);
    expect(await first).toEqual([0]);

    const second = pipe(stream, take(1), collect);
    await clock.tickAsync(500);
    expect(await second).toEqual([0]);
  });

  it('should complete all subscribers when the source completes', async () => {
    const stream = pipe(interval(100), take(1), share);
    const unsubscribeFn = jest.fn();

    subscribe(stream)(function* () {
      try {
        while (true) {
          yield;
        }
      } finally {
        unsubscribeFn();
      }
    });

    subscribe(stream)(function* () {
      try {
        while (true) {
          yield;
        }
      } finally {
        unsubscribeFn();
      }
    });

    await clock.tickAsync(100);
    expect(unsubscribeFn).toHaveBeenCalledTimes(2);
  });

  it('should handle subscribers unsubscribing', async () => {
    const stream = share(interval(100));
    const first = pipe(stream, take(3), collect);
    await clock.tickAsync(100);
    const second = pipe(stream, take(5), collect); // second subscription after stream emits first value

    await clock.tickAsync(200); // first stream should complete
    expect(await first).toEqual([0, 1, 2]);

    await clock.tickAsync(300); // second stream should complete
    expect(await second).toEqual([1, 2, 3, 4, 5]);
  });
});
