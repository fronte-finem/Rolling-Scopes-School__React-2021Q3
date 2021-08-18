export type None = null | undefined;
export type Maybe<T> = T | None;

export function isNone<T>(maybeT: Maybe<T>): maybeT is None {
  return maybeT === undefined || maybeT === null;
}

export function isValue<T>(maybeT: Maybe<T>): maybeT is T {
  return !isNone(maybeT);
}

export type Op<A, B> = (a: A) => B;
export type OpMaybe<A, B> = (maybeA: Maybe<A>) => Maybe<B>;
export type GetMaybe<A, B> = (a: A) => Maybe<B>;

export function mapGetter<A, B>(mapAB: Map<A, B>): OpMaybe<A, B> {
  return (maybeA: Maybe<A>) => (isNone(maybeA) ? maybeA : mapAB.get(maybeA));
}

export class MaybeUtils {
  static funcMap<A, B>(func: Op<A, B>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> =>
      isNone(maybeA) ? maybeA : func(maybeA);
  }

  static varMap<A, B>(maybeA: Maybe<A>): (op: Op<A, B>) => Maybe<B> {
    return (func: Op<A, B>): Maybe<B> =>
      isNone(maybeA) ? maybeA : func(maybeA);
  }

  static strictMap<A, B>(maybeA: Maybe<A>, func: Op<A, B>): Maybe<B> {
    return isNone(maybeA) ? maybeA : func(maybeA);
  }

  static apply<A, B>(maybeFunc: Maybe<Op<A, B>>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> =>
      isNone(maybeFunc) ? maybeFunc : MaybeUtils.funcMap(maybeFunc)(maybeA);
  }

  static bind<A, B>(getMaybe: GetMaybe<A, B>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> =>
      isNone(maybeA) ? maybeA : getMaybe(maybeA);
  }
}
