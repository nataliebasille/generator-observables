import fakeTimers from '@sinonjs/fake-timers';
import { take } from '../../operators';
import { merge } from './merge';
import { from } from '../from/from';
import { pipe } from '../../pipe/pipe';
import { collect } from '../../terminators/collect/collect';

describe('merge', () => {
  let clock: ReturnType<typeof fakeTimers.install>;

  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should merge sync streams', async () => {
    const stream1 = from([1, 2, 3]);
    const stream2 = from([4, 5, 6]);

    const result = await pipe(merge(stream1, stream2), collect);
    expect(result).toEqual([1, 4, 2, 5, 3, 6]);
  });

  it('should merge async streams in order values are emitted', async () => {
    const stream1 = async function* () {
      yield 1;
      await new Promise((resolve) => setTimeout(resolve, 500));
      yield 2;
    };

    const stream2 = async function* () {
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 3;
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield 4;
    };

    const mergedStream = pipe(merge(stream1, stream2), collect);
    await clock.tickAsync(1000);

    const result = await mergedStream;
    expect(result).toEqual([1, 3, 4, 2]);
  });

  // it("merges infinitely generating generators", async () => {
  //   const stream1 = async function* () {
  //     while (true) {
  //       yield "fizz";
  //       await new Promise((resolve) => setTimeout(resolve, 3));
  //     }
  //   };

  //   const stream2 = async function* () {
  //     while (true) {
  //       yield "buzz";
  //       await new Promise((resolve) => setTimeout(resolve, 5));
  //     }
  //   };

  //   const mergedStream = take(7)(merge(stream1(), stream2()));

  //   const values: string[] = [];

  //   (async () => {
  //     for await (const value of mergedStream) {
  //       values.push(value);
  //     }
  //   })();

  //   await clock.tickAsync(40);

  //   expect(values).toEqual([
  //     "fizz",
  //     "buzz",
  //     "fizz",
  //     "buzz",
  //     "fizz",
  //     "fizz",
  //     "buzz",
  //   ]);
  // });

  // it("yields the values from the given streams in the order they are emitted", async () => {
  //   const stream1 = async function* () {
  //     yield 1;
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     yield 2;
  //   };

  //   const stream2 = async function* () {
  //     await new Promise((resolve) => setTimeout(resolve, 100));
  //     yield 3;
  //     await new Promise((resolve) => setTimeout(resolve, 100));
  //     yield 4;
  //   };

  //   const mergedStream = merge(stream1(), stream2());

  //   const values: number[] = [];

  //   (async () => {
  //     for await (const value of mergedStream) {
  //       values.push(value);
  //     }
  //   })();

  //   await clock.tickAsync(1000);

  //   expect(values).toEqual([1, 3, 4, 2]);
  // });
});
