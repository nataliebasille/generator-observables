import { pipe } from '../../pipe/pipe';
import { empty, from, Stream } from '../../streams';
import { collect, last } from '../../terminators';
import { reduce } from './reduce';

describe('reduce', () => {
  it('should reduce an array of numbers to a single value', async () => {
    const input = from([1, 2, 3, 4, 5]);
    const stream = pipe(
      input,
      reduce((acc, value) => acc + value, 0)
    );
    const result = await collect(stream);
    expect(result).toEqual([1, 3, 6, 10, 15]);
  });

  it('should never emit if the input stream is empty an no initial value is provided', async () => {
    const input: Stream<number> = empty;
    const result = await pipe(
      input,
      reduce((acc, value) => acc + value),
      collect
    );
    expect(result).toEqual([]);
  });

  it('should emit the initial value if the input stream is empty', async () => {
    const input: Stream<number> = empty;
    const result = await pipe(
      input,
      reduce((acc: number, value: number) => acc + value, 0),
      collect
    );
    expect(result).toEqual([0]);
  });

  it('should reduce an array of strings to a single value', async () => {
    const input = from(['foo', 'bar', 'baz']);
    const result = await pipe(
      input,
      reduce((acc, value) => acc + value, ''),
      last()
    );
    expect(result).toEqual('foobarbaz');
  });

  it('should reduce an array of objects to a single value', async () => {
    const input = from([{ x: 1 }, { x: 2 }, { x: 3 }]);
    const result = await pipe(
      input,
      reduce((acc, value: { x: number }) => ({ x: acc.x + value.x }), { x: 0 }),
      last()
    );
    expect(result).toEqual({ x: 6 });
  });
});
