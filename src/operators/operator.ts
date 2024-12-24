import { Stream } from '../streams';

export type Operator<TIn, TOut> = (stream: Stream<TIn>) => Stream<TOut>;
