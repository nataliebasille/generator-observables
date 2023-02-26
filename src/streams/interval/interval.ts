import { Stream } from "../stream";

export async function* interval(every: number): Stream<number> {
  let i = 0;
  while (true) {
    await new Promise((resolve) => {
      setTimeout(resolve, every);
    });
    yield i++;
  }
}
