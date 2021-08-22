import { RequestDocument } from 'graphql-request/dist/types';
import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT = 'https://graphql.anilist.co';

export function apiRequestUtil<Vars, Result>(
  query: RequestDocument,
  variables: Vars,
  signal: AbortSignal
): Promise<Result> {
  console.log('apiRequestUtil', signal);
  return new GraphQLClient(API_ENDPOINT, { signal }).request<Result, Vars>(
    query,
    variables
  );
}

export const isAbortError = (error: unknown) =>
  error instanceof DOMException && error.message === 'Aborted';
