import { Stream } from "../../streams/stream";

export const take = (count: number) => {
  return <T>(stream: Stream<T>) => {
    return (async function* () {
      let index = 0;
      for await (const value of stream) {
        yield value;
        if (++index >= count) {
          break;
        }
      }
    })();
  };
};
