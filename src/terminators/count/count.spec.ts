import { pipe } from "../../pipe/pipe";
import { empty, from } from "../../streams";
import { count } from "./count";

describe("count", () => {
  it("counts the number of values emitted by a stream", async () => {
    const value = await pipe(from([1, 2, 3, 4, 5, 6, 7]), count());

    expect(value).toBe(7);
  });

  it("returns 0 for an empty stream", async () => {
    const value = await pipe(empty(), count());

    expect(value).toBe(0);
  });

  it("counts the number of values that matched predicate", async () => {
    const value = await pipe(
      from([1, 2, 3, 4, 5, 6, 7]),
      count((v: number) => v % 2 === 0)
    );

    expect(value).toBe(3);
  });

  it("returns 0 when no items matched predicate", async () => {
    const value = await pipe(
      from([1, 2, 3, 4, 5, 6, 7]),
      count((v: number) => v > 7)
    );

    expect(value).toBe(0);
  });
});
