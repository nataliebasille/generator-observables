import { pipe } from '../../pipe/pipe';
import { interval, type Stream } from '../../streams';
import { debounceOn } from '../debounceOn/debounceOn';

export const debounce = (duration: number) => {
  return <T>(stream: Stream<T>) => {
    return pipe(stream, debounceOn(interval(duration)));
  };
};
