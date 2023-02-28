import { collect } from "../../terminators";
import { from } from "../from/from";
import { zip } from "./zip";

describe("zip", () => {
  it("zips two streams", async () => {
    const stream1 = from([1, 2, 3, 4, 5, 6, 7]);
    const stream2 = from([1, 2, 3, 4, 5, 6, 7]);
    const zipped = zip(stream1, stream2);
    const result = await collect(zipped);
    expect(result).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
    ]);
  });

  it("zips two streams with different lengths", async () => {
    const stream1 = from([1, 2, 3, 4, 5, 6, 7]);
    const stream2 = from([1, 2, 3, 4]);
    const zipped = zip(stream1, stream2);
    const result = await collect(zipped);
    expect(result).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ]);
  });

  it("zips two streams with different lengths and different types", async () => {
    const stream1 = from([1, 2, 3, 4, 5, 6, 7]);
    const stream2 = from(["a", "b", "c", "d"]);
    const zipped = zip(stream1, stream2);
    const result = await collect(zipped);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
      [4, "d"],
    ]);
  });
});
