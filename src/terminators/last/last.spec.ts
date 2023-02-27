import { empty, from } from "../../streams";
import { last } from "./last";

describe("last", () => {
  it("gets last value emitted by stream", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const lastValue = await last()(stream);

    expect(lastValue).toBe(7);
  });

  it("gets last value emitted by stream that matches predicate", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const lastValue = await last((value: number) => value % 2 === 0)(stream);

    expect(lastValue).toBe(6);
  });

  it("returns undefined if no value matches predicate", async () => {
    const stream = from([1, 2, 3, 4, 5, 6, 7]);
    const lastValue = await last((value: number) => value > 7)(stream);

    expect(lastValue).toBe(undefined);
  });

  it("returns undefined if stream is empty", async () => {
    const stream = empty();
    const lastValue = await last()(stream);
    expect(lastValue).toBe(undefined);
  });
});
