import { Stream } from "../streams/stream";

export type Operator<TIn, TOut> = (stream: Stream<TIn>) => Stream<TOut>;
