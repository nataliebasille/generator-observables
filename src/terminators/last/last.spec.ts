import { pipe } from "../../pipe/pipe";
import { empty, from } from "../../streams";
import { last } from "./last";

describe("last", () => {
  it("gets last value emitted by stream", async () => {
    const lastValue = await pipe(from([1, 2, 3, 4, 5, 6, 7]), last());

    expect(lastValue).toBe(7);
  });

  it("gets last value emitted by stream that matches predicate", async () => {
    const lastValue = await pipe(
      from([1, 2, 3, 4, 5, 6, 7]),
      last((value: number) => value % 2 === 0)
    );

    expect(lastValue).toBe(6);
  });

  it("returns undefined if no value matches predicate", async () => {
    const lastValue = await pipe(
      from([1, 2, 3, 4, 5, 6, 7]),
      last((value: number) => value > 7)
    );

    expect(lastValue).toBe(undefined);
  });

  it("returns undefined if stream is empty", async () => {
    const lastValue = await pipe(empty(), last());
    expect(lastValue).toBe(undefined);
  });
});
