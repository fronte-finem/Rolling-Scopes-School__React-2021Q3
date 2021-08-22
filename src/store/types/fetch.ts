import { Maybe } from 'shared/maybe';

export interface FetchState<T> {
  isLoading: boolean;
  isError: boolean;
  error?: Maybe<unknown>;
  data?: Maybe<T>;
}
