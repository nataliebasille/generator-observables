import { type Stream } from '../../streams';

export async function collect<T>(stream: Stream<T>) {
  const result = [];
  for await (const value of stream()) {
    result.push(value);
  }
  return result;
}
