import { pipe } from '../../pipe/pipe';
import { from } from '../../streams';
import { collect } from '../../terminators';
import { take } from '../take/take';
import { repeat } from './repeat';

describe('repeat', () => {
  it('should repeat the source stream the given amount of times', async () => {
    const stream = from([1, 2, 3]);

    const result = await pipe(stream, repeat(3), collect);
    expect(result).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  it('should repeat the source stream indefinitely', async () => {
    const stream = async function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    const result = await pipe(stream, repeat(), take(25), collect);

    expect(result).toEqual([
      1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    ]);
  });
});
