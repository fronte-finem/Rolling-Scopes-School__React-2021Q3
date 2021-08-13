export type Maybe<T> = T | null | undefined;

export function none<T>(maybeT: Maybe<T>): boolean {
  return maybeT === undefined || maybeT === null;
}

export function just<T>(maybeT: Maybe<T>): boolean {
  return !none(maybeT);
}

export type Op<A, B> = (a: A) => B;
export type OpMaybe<A, B> = (maybeA: Maybe<A>) => Maybe<B>;
export type GetMaybe<A, B> = (a: A) => Maybe<B>;

export function mapGetter<A, B>(mapAB: Map<A, B>): OpMaybe<A, B> {
  return (maybeA: Maybe<A>) => maybeA && mapAB.get(maybeA);
}

export class MaybeUtils {
  static funcMap<A, B>(func: Op<A, B>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> => maybeA && func(maybeA);
  }

  static varMap<A, B>(maybeA: Maybe<A>): (op: Op<A, B>) => Maybe<B> {
    return (func: Op<A, B>): Maybe<B> => maybeA && func(maybeA);
  }

  static strictMap<A, B>(maybeA: Maybe<A>, func: Op<A, B>): Maybe<B> {
    return maybeA && func(maybeA);
  }

  static apply<A, B>(maybeFunc: Maybe<Op<A, B>>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> =>
      maybeFunc && MaybeUtils.funcMap(maybeFunc)(maybeA);
  }

  static bind<A, B>(getMaybe: GetMaybe<A, B>): OpMaybe<A, B> {
    return (maybeA: Maybe<A>): Maybe<B> => maybeA && getMaybe(maybeA);
  }
}
