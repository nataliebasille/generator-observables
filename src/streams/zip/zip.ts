import { Stream } from "../stream";

export function zip<S1, S2>(s1: Stream<S1>, s2: Stream<S2>): Stream<[S1, S2]>;
export function zip<S1, S2, S3>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>
): Stream<[S1, S2, S3]>;
export function zip<S1, S2, S3, S4>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>
): Stream<[S1, S2, S3, S4]>;
export function zip<S1, S2, S3, S4, S5>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>
): Stream<[S1, S2, S3, S4, S5]>;
export function zip<S1, S2, S3, S4, S5, S6>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>
): Stream<[S1, S2, S3, S4, S5, S6]>;
export function zip<S1, S2, S3, S4, S5, S6, S7>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>
): Stream<[S1, S2, S3, S4, S5, S6, S7]>;
export function zip<S1, S2, S3, S4, S5, S6, S7, S8>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>,
  s8: Stream<S8>
): Stream<[S1, S2, S3, S4, S5, S6, S7, S8]>;
export function zip<S1, S2, S3, S4, S5, S6, S7, S8, S9>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>,
  s8: Stream<S8>,
  s9: Stream<S9>
): Stream<[S1, S2, S3, S4, S5, S6, S7, S8, S9]>;
export function zip<S1, S2, S3, S4, S5, S6, S7, S8, S9, S10>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>,
  s8: Stream<S8>,
  s9: Stream<S9>,
  s10: Stream<S10>
): Stream<[S1, S2, S3, S4, S5, S6, S7, S8, S9, S10]>;
export function zip<S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>,
  s8: Stream<S8>,
  s9: Stream<S9>,
  s10: Stream<S10>,
  s11: Stream<S11>
): Stream<[S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11]>;
export function zip<S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12>(
  s1: Stream<S1>,
  s2: Stream<S2>,
  s3: Stream<S3>,
  s4: Stream<S4>,
  s5: Stream<S5>,
  s6: Stream<S6>,
  s7: Stream<S7>,
  s8: Stream<S8>,
  s9: Stream<S9>,
  s10: Stream<S10>,
  s11: Stream<S11>,
  s12: Stream<S12>
): Stream<[S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12]>;

export function zip(...streams: Stream<unknown>[]): Stream<unknown[]> {
  return (async function* () {
    while (true) {
      const results = await Promise.all(streams.map((i) => i.next()));
      if (results.some((r) => r.done)) {
        break;
      }
      yield results.map((r) => r.value);
    }
  })();
}
