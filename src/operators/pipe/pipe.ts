import { StreamSource } from "../../streams/stream";
import { Operator } from "../operate";

export function pipe<T1, T2>(operator: Operator<T1, T2>): Operator<T1, T2>;
export function pipe<T1, T2, T3>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>
): Operator<T1, T3>;
export function pipe<T1, T2, T3, T4>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>,
  operator3: Operator<T3, T4>
): Operator<T1, T4>;
export function pipe<T1, T2, T3, T4, T5>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>,
  operator3: Operator<T3, T4>,
  operator4: Operator<T4, T5>
): Operator<T1, T5>;
export function pipe<T1, T2, T3, T4, T5, T6>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>,
  operator3: Operator<T3, T4>,
  operator4: Operator<T4, T5>,
  operator5: Operator<T5, T6>
): Operator<T1, T6>;
export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>,
  operator3: Operator<T3, T4>,
  operator4: Operator<T4, T5>,
  operator5: Operator<T5, T6>,
  operator6: Operator<T6, T7>
): Operator<T1, T7>;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  operator1: Operator<T1, T2>,
  operator2: Operator<T2, T3>,
  operator3: Operator<T3, T4>,
  operator4: Operator<T4, T5>,
  operator5: Operator<T5, T6>,
  operator6: Operator<T6, T7>,
  operator7: Operator<T7, T8>
): Operator<T1, T8>;

export function pipe(...operators: Operator<unknown, unknown>[]) {
  return ((source: StreamSource<unknown>) => {
    return operators.reduce((source, operator) => operator(source), source);
  }) satisfies Operator<unknown, unknown>;
}
