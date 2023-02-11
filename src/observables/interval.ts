import { Observable } from "./observable";

export const interval = (interval: number): Observable<number> => {
  return async function* () {
    let i = 0;
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, interval));
      yield i++;
    }
  };
};
