import { Stream } from "../../streams/stream";
import { from } from "../../streams/from/from";
import { map } from "./map";

describe("map", () => {
  const double = (x: number) => x * 2;
  const addIndex = (x: number, index: number) => x + index;

  it("applies a function to each item in an array", async () => {
    await testExpectedResults(map(double)(from([1, 2, 3])), [2, 4, 6]);
  });

  it("handles an empty array", async () => {
    await testExpectedResults(map(double)(from([])), []);
  });

  it("passes the index as the second argument to the callback", async () => {
    await testExpectedResults(map(addIndex)(from([1, 2, 3])), [1, 3, 5]);
  });
});

async function testExpectedResults(stream: Stream<number>, expected: number[]) {
  const output = [];

  for await (const value of stream) {
    output.push(value);
  }

  expect(output).toEqual(expected);
}
