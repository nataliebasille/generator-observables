import type { Operator } from '../operators';
import type { Stream } from '../streams';
import type { TerminatorOperator } from '../terminators';

export function pipe<TIn, TOut1>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>
): Stream<TOut1>;
export function pipe<TIn, TOut1>(
  stream: Stream<TIn>,
  terminator: TerminatorOperator<TIn, TOut1>
): Promise<TOut1>;
export function pipe<TIn, TOut1, TOut2>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  op2: Operator<TOut1, TOut2>
): Stream<TOut2>;
export function pipe<TIn, TOut1, TOut2>(
  stream: Stream<TIn>,
  op1: Operator<TIn, TOut1>,
  terminator: TerminatorOperator<TOut1, TOut2>
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
  terminator: TerminatorOperator<TOut2, TOut3>
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
  terminator: TerminatorOperator<TOut3, TOut4>
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
  terminator: TerminatorOperator<TOut4, TOut5>
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
  terminator: TerminatorOperator<TOut5, TOut6>
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
  terminator: TerminatorOperator<TOut6, TOut7>
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
  terminator: TerminatorOperator<TOut7, TOut8>
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
  terminator: TerminatorOperator<TOut8, TOut9>
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
  terminator: TerminatorOperator<TOut9, TOut10>
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
  terminator: TerminatorOperator<TOut10, TOut11>
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
  terminator: TerminatorOperator<TOut11, TOut12>
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
  terminator: TerminatorOperator<TOut12, TOut13>
): Promise<TOut13>;

export function pipe(
  stream: Stream<unknown>,
  ...operators: [
    ...Operator<unknown, unknown>[],
    Operator<unknown, unknown> | TerminatorOperator<unknown, unknown>
  ]
) {
  const [last, ...rest] = [operators.pop(), ...operators] as [
    Operator<unknown, unknown> | TerminatorOperator<unknown, unknown>,
    ...Operator<unknown, unknown>[]
  ];

  return last(
    rest.reduce((stream, operator) => {
      return operator(stream);
    }, stream)
  );
}
