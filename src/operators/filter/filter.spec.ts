import { pipe } from "../../pipe/pipe";
import { from } from "../../streams";
import { collect } from "../../terminators";
import { filter } from "./filter";

describe("operator - filter", () => {
  it("only emits values that pass the predicate", async () => {
    const numberStream = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const values = await pipe(
      numberStream,
      filter((value) => value % 2 === 0),
      collect
    );

    expect(values).toEqual([0, 2, 4, 6, 8]);
  });

  it("emits nothing if no items in source match predicate", async () => {
    const numberStream = from([1, 3, 5, 7, 9]);
    const values = await pipe(
      numberStream,
      filter((value) => value % 2 === 0),
      collect
    );

    expect(values).toEqual([]);
  });

  it("emits nothing if source is empty", async () => {
    const numberStream = from([]);
    const values = await pipe(
      numberStream,
      filter((value) => value % 2 === 0),
      collect
    );

    expect(values).toEqual([]);
  });
});
