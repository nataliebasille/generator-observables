import { pipe } from "../../pipe/pipe";
import { empty, from } from "../../streams";
import { collect } from "../../terminators";
import { distinct } from "./distinct";

describe("distinct", () => {
  it("should yield distinct values from an input generator with default comparison function", async () => {
    const numberStream = from([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    const values = await pipe(numberStream, distinct(), collect);
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

    const values = await pipe(
      generator(),
      distinct((user: User) => user.id),
      collect
    );

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

    const values = await pipe(generator(), distinct(), collect);

    expect(values).toEqual([1, 2, 3, 4]);
  });

  it("should handle an empty input generator", async () => {
    const emptyStream = empty();

    const values = await pipe(emptyStream, distinct(), collect);
    expect(values).toEqual([]);
  });
});
