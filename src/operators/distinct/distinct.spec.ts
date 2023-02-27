import { empty, from } from "../../streams";
import { distinct } from "./distinct";

describe("distinct", () => {
  it("should yield distinct values from an input generator with default comparison function", async () => {
    const numberStream = from([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    const source = distinct()(numberStream);

    const values = [];
    for await (const value of source()) {
      values.push(value);
    }

    expect(values).toEqual([1, 2, 3]);
  });

  it("should yield distinct values from an input generator with hash function", async () => {
    type User = { id: number; name: string };
    async function* generator() {
      yield { id: 1, name: "Alice" };
      yield { id: 2, name: "Bob" };
      yield { id: 1, name: "Charlie" };
      yield { id: 3, name: "Dave" };
      yield { id: 2, name: "Eve" };
    }

    const source = distinct((user: User) => user.id)(generator());

    const values = [];
    for await (const value of source()) {
      values.push(value);
    }

    expect(values).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Dave" },
    ]);
  });

  it("should yield all values from an input generator with only distinct values", async () => {
    async function* generator() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    }

    const source = distinct()(generator());

    const values = [];
    for await (const value of source()) {
      values.push(value);
    }

    expect(values).toEqual([1, 2, 3, 4]);
  });

  it("should handle an empty input generator", async () => {
    const emptyStream = empty();

    const source = distinct()(emptyStream);

    const values = [];
    for await (const value of source()) {
      values.push(value);
    }

    expect(values).toEqual([]);
  });
});
