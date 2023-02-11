import { duplexStream } from "./duplex";
import { Stream } from "./stream";
const fakeTimers = require("@sinonjs/fake-timers");

describe("duplexStream", () => {
  let clock: ReturnType<typeof fakeTimers.install>;
  beforeEach(() => {
    clock = fakeTimers.install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it("should work", async () => {
    const [factory, next] = duplexStream<number>();
    const stream = factory();
    const captureResult = jest.fn();

    observeStream(stream, captureResult);

    next(1);
    await clock.nextAsync();

    next(2);
    await clock.nextAsync();

    next(3);
    await clock.nextAsync();

    expect(captureResult).toHaveBeenCalledTimes(3);
    expect(captureResult).toHaveBeenNthCalledWith(1, 1);
    expect(captureResult).toHaveBeenNthCalledWith(2, 2);
    expect(captureResult).toHaveBeenNthCalledWith(3, 3);
  });
});

async function observeStream(
  stream: Stream<any>,
  captureResult: (value: any) => void
) {
  for await (const value of stream) {
    captureResult(value);
  }
}
