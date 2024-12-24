import fakeTimers from '@sinonjs/fake-timers';

import { empty } from '../../streams/empty/empty';
import { collect } from './collect';

describe('collect', () => {
  describe('sync', () => {
    it('should return empty array when no values are yielded', () => {
      expect(collect(empty)).resolves.toEqual([]);
    });

    it('should return array of values yielded from sync stream', async () => {
      expect(
        await collect(async function* () {
          yield 1;
          yield 2;
          yield 3;
        })
      ).toEqual([1, 2, 3]);
    });
  });

  describe('async', () => {
    let clock: ReturnType<typeof fakeTimers.install>;

    beforeEach(() => {
      clock = fakeTimers.install();
    });

    afterEach(() => {
      clock.uninstall();
    });

    it('should return array of values yielded from async stream', async () => {
      const promise = collect(async function* () {
        yield 1;
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield 2;
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield 3;
      });
      await clock.tickAsync(200);
      expect(await promise).toEqual([1, 2, 3]);
    });
  });
});
