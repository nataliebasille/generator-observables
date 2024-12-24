import fakeTimers from '@sinonjs/fake-timers';

import { take } from './take';
import { from } from '../../streams/from/from';
import { empty } from '../../streams/empty/empty';
import { pipe } from '../../pipe/pipe';
import { collect } from '../../terminators';

describe('take', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('returns the expected number of items', async () => {
    const numberStream = from([0, 1, 2, 3]);
    const stream = take(2)(numberStream);

    const callback = jest.fn();
    for await (const value of stream()) {
      callback(value);
    }

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(1, 0);
    expect(callback).toHaveBeenNthCalledWith(2, 1);
  });

  it('request number of items > number of items in stream, then returns all items in stream', async () => {
    const numberStream = from([0, 1, 2, 3]);
    const stream = take(10)(numberStream);
    const callback = jest.fn();
    for await (const value of stream()) {
      callback(value);
    }

    expect(callback).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenNthCalledWith(1, 0);
    expect(callback).toHaveBeenNthCalledWith(2, 1);
    expect(callback).toHaveBeenNthCalledWith(3, 2);
    expect(callback).toHaveBeenNthCalledWith(4, 3);
  });

  it('should be done for an empty stream', async () => {
    const stream = take(5)(empty);
    expect(stream().next()).resolves.toEqual({
      done: true,
      value: undefined,
    });
  });

  // test that it works with async streams
  it('should take values from an async stream', async () => {
    const stream = async function* () {
      yield 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 2;
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 3;
    };

    const result = pipe(stream, take(2), collect);
    await clock.tickAsync(1000);
    expect(result).resolves.toEqual([1, 2]);
  });

  // test that the inner stream is unsubscribed when the outer stream is finished
  it('should unsubscribe from the inner stream when the outer stream is finished', async () => {
    const unsubscribeCheck = jest.fn();
    const stream = async function* () {
      try {
        yield 1;
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield 2;
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield 3;
      } finally {
        unsubscribeCheck();
      }
    };

    pipe(stream, take(2), collect);
    await clock.tickAsync(1000);

    expect(unsubscribeCheck).toHaveBeenCalledTimes(1);
  });
});
