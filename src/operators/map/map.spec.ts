import { Stream } from '../../streams/stream';
import { from } from '../../streams/from/from';
import { map } from './map';
import { pipe } from '../../pipe/pipe';
import { collect } from '../../terminators';

describe('map', () => {
  const double = (x: number) => x * 2;
  const addIndex = (x: number, index: number) => x + index;

  it('applies a function to each item in an array', async () => {
    await testExpectedResults(pipe(from([1, 2, 3]), map(double)), [2, 4, 6]);
  });

  it('handles an empty array', async () => {
    await testExpectedResults(pipe(from([]), map(double)), []);
  });

  it('passes the index as the second argument to the callback', async () => {
    await testExpectedResults(pipe(from([1, 2, 3]), map(addIndex)), [1, 3, 5]);
  });
});

async function testExpectedResults(stream: Stream<number>, expected: number[]) {
  expect(await collect(stream)).toEqual(expected);
}
