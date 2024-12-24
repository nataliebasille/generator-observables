import { Stream } from '../../streams';
import { TerminatorOperator } from '../terminator';

export function last<T>(predicate?: (value: T) => boolean) {
  return async <U extends T = T>(stream: Stream<U>): Promise<U | undefined> => {
    let result: U | undefined = undefined;

    for await (const value of stream()) {
      if (!predicate || predicate(value)) {
        result = value;
      }
    }

    return result;
  };
}
