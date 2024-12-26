import fakeTimers from '@sinonjs/fake-timers';
import { interval } from './interval';
import { subscribe } from '../../subscribe';
import { Stream } from '../stream';

describe('interval', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should yield values at given interval', async () => {
    const stream = interval(100);
    const values: number[] = [];

    subscribe(stream)(function* () {
      values.push(yield);
    });

    await clock.tickAsync(1000);

    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should stop yielding values after unsubscribe', async () => {
    const stream = interval(100);
    const values: number[] = [];

    const unsubscribe = subscribe(stream)(function* () {
      values.push(yield);
    });

    await clock.tickAsync(1000);
    unsubscribe();
    await clock.tickAsync(1000);

    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should be done after unsubscribe', async () => {
    const stream = interval(100);
    const generator = stream();

    const unsubscribe = subscribe(() => generator)(function* () {
      yield;
    });

    await clock.tickAsync(1000);
    unsubscribe();

    expect(generator.next()).resolves.toEqual({ done: true, value: undefined });
  });

  it('should be able to complete when calling return on generator', async () => {
    const stream = interval(100);
    const generator = stream();

    generator?.next();
    await generator?.return(undefined);
  });
});
