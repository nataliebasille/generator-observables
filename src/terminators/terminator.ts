import type { Stream } from '../streams';

export type Terminator<TOut> = Promise<TOut>;
export type TerminatorOperator<TIn, TOut> = (
  stream: Stream<TIn>
) => Promise<TOut>;
