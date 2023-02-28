import type { Operator } from "../operators";
import type { Stream } from "../streams";
import type { Terminator } from "../terminators/terminator";

export function pipe<TIn, TOut1>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>
): Stream<TOut1>;
export function pipe<TIn, TOut1>(
  stream: Stream<TIn>,
  terminator: Terminator<TIn, TOut1>
): Promise<TOut1>;
export function pipe<TIn, TOut1, TOut2>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>
): Stream<TOut2>;
export function pipe<TIn, TOut1, TOut2>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  terminator: Terminator<TOut1, TOut2>
): Promise<TOut2>;
export function pipe<TIn, TOut1, TOut2, TOut3>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>
): Stream<TOut3>;
export function pipe<TIn, TOut1, TOut2, TOut3>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  terminator: Terminator<TOut2, TOut3>
): Promise<TOut3>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>
): Stream<TOut4>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  terminator: Terminator<TOut3, TOut4>
): Promise<TOut4>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>
): Stream<TOut5>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  terminator: Terminator<TOut4, TOut5>
): Promise<TOut5>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5, TOut6>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>
): Stream<TOut6>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5, TOut6>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  terminator: Terminator<TOut5, TOut6>
): Promise<TOut6>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5, TOut6, TOut7>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>
): Stream<TOut7>;
export function pipe<TIn, TOut1, TOut2, TOut3, TOut4, TOut5, TOut6, TOut7>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  terminator: Terminator<TOut6, TOut7>
): Promise<TOut7>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>
): Stream<TOut8>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  terminator: Terminator<TOut7, TOut8>
): Promise<TOut8>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>
): Stream<TOut9>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  terminator: Terminator<TOut8, TOut9>
): Promise<TOut9>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>
): Stream<TOut10>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  terminator: Terminator<TOut9, TOut10>
): Promise<TOut10>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  op11: Operator<TOut10, TOut11>
): Stream<TOut11>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  terminator: Terminator<TOut10, TOut11>
): Promise<TOut11>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11,
  TOut12
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  op11: Operator<TOut10, TOut11>,
  op12: Operator<TOut11, TOut12>
): Stream<TOut12>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11,
  TOut12
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  op11: Operator<TOut10, TOut11>,
  terminator: Terminator<TOut11, TOut12>
): Promise<TOut12>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11,
  TOut12,
  TOut13
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  op11: Operator<TOut10, TOut11>,
  op12: Operator<TOut11, TOut12>,
  op13: Operator<TOut12, TOut13>
): Stream<TOut13>;
export function pipe<
  TIn,
  TOut1,
  TOut2,
  TOut3,
  TOut4,
  TOut5,
  TOut6,
  TOut7,
  TOut8,
  TOut9,
  TOut10,
  TOut11,
  TOut12,
  TOut13
>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>,
  op3: Operator<TOut2, TOut3>,
  op4: Operator<TOut3, TOut4>,
  op5: Operator<TOut4, TOut5>,
  op6: Operator<TOut5, TOut6>,
  op7: Operator<TOut6, TOut7>,
  op8: Operator<TOut7, TOut8>,
  op9: Operator<TOut8, TOut9>,
  op10: Operator<TOut9, TOut10>,
  op11: Operator<TOut10, TOut11>,
  op12: Operator<TOut11, TOut12>,
  terminator: Terminator<TOut12, TOut13>
): Promise<TOut13>;

export function pipe(
  stream: Stream<unknown>,
  ...operators:
    | Operator<unknown, unknown>[]
    | [...Operator<unknown, unknown>[], Terminator<unknown, unknown>]
): Stream<unknown> | Promise<unknown> {
  return (operators as unknown[]).reduce((stream, operator) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (operator as any)(stream);
  }, stream) as Stream<unknown> | Promise<unknown>;
}
