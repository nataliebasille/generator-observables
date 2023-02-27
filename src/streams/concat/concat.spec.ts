import { collect } from "../../terminators";
import { from } from "../from/from";
import { concat } from "./concat";

describe("concat", () => {
  it("yields results in order from sequence of generators", async () => {
    const stream1 = from([1, 2, 3]);
    const stream2 = from([4, 5, 6]);
    const result = await collect(concat(stream1, stream2));
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("works with empty streams", async () => {
    const stream1 = from([]);
    const stream2 = from([1, 2, 3]);
    const result = await collect(concat(stream1, stream2));
    expect(result).toEqual([1, 2, 3]);
  });
});
