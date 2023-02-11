import { Observable } from "../observables/observable";

export type Operator<TInput, TOutput> = (
  input: Observable<TInput>
) => Observable<TOutput>;
