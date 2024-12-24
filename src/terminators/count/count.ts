import { Stream } from '../../streams';
import { reduce } from '../../operators/reduce/reduce';
import { last } from '../last/last';

export function count<T>(predicate?: (value: T) => boolean) {
  return async (stream: Stream<T>) => {
    const value = await last<number>()(
      reduce<T, number>((count, item) => {
        if (!predicate || predicate(item)) {
          return count + 1;
        }
        return count;
      }, 0)(stream)
    );

    return value ?? 0;
  };
}
