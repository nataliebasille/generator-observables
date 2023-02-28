import { from } from "../../streams";
import { count } from "./count";

describe("count", () => {
  it("counts the number of values emitted by a stream", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const value = await count()(stream);

    expect(value).toBe(7);
  });

  it("returns 0 for an empty stream", async () => {
    const stream = from([]);
    const value = await count()(stream);

    expect(value).toBe(0);
  });

  it("counts the number of values that matched predicate", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const value = await count((v: number) => v % 2 === 0)(stream);

    expect(value).toBe(3);
  });

  it("returns 0 when no items matched predicate", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const value = await count((v: number) => v > 7)(stream);

    expect(value).toBe(0);
  });
});
