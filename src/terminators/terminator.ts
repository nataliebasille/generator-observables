import type { Stream } from "../streams";

export type Terminator<TIn, TOut> = (stream: Stream<TIn>) => Promise<TOut>;
