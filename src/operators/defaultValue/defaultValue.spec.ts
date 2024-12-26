import { pipe } from '../../pipe/pipe';
import { empty, from } from '../../streams';
import { collect } from '../../terminators/collect/collect';
import { defaultValue } from './defaultValue';

describe('defaultValue', () => {
  it('should yield the default value if the source stream is empty', async () => {
    const result = await pipe(empty, defaultValue(1234), collect);

    expect(result).toEqual([1234]);
  });

  it('should yield source stream when it has values', async () => {
    const result = await pipe(from([1, 2, 3]), defaultValue(1234), collect);

    expect(result).toEqual([1, 2, 3]);
  });
});
