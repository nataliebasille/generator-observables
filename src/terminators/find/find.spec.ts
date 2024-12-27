import { pipe } from '../../pipe/pipe';
import { from } from '../../streams';
import { find } from './find';

describe('find', () => {
  it('emits value that matches predicate', async () => {
    const result = await pipe(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      find((value) => value % 5 === 0)
    );

    expect(result).toEqual(5);
  });

  it('emits no values if no value matches predicate', async () => {
    const result = await pipe(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      find(() => false)
    );

    expect(result).toEqual(undefined);
  });
});
