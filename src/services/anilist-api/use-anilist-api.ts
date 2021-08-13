import { RequestDocument } from 'graphql-request/dist/types';
import { useEffect, useState } from 'react';
import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT = 'https://graphql.anilist.co';

const isAbortError = (error: unknown) =>
  error instanceof DOMException && error.message === 'Aborted';

export interface UseAnilistApi<T> {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  data?: T | null;
}

export function useAnilistApi<TResult, TVars>(
  query: RequestDocument,
  variables: TVars
): UseAnilistApi<TResult> {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<TResult | null>(null);

  const abortController = new AbortController();

  let fetchData = async () => {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const result = await new GraphQLClient(API_ENDPOINT, {
        signal: abortController.signal,
      }).request<TResult, TVars>(query, variables);
      setData(result);
    } catch (error) {
      console.log(error);
      if (!isAbortError(error)) {
        setIsError(true);
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(null, null);

    return () => {
      abortController.abort();
    };
  }, [variables]);

  return { isLoading, isError, error, data };
}
