import {
  Exact,
  Maybe,
  MediaFormat,
  MediaSort,
  MediaStatus,
  MediaType,
  Scalars,
} from './schema-types';

export type SearchQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<MediaSort>> | Maybe<MediaSort>>;
}>;

export type SearchQuery = {
  Page?: Maybe<{
    pageInfo?: Maybe<PageInfoFragment>;
    media?: Maybe<Array<Maybe<MediaFragment>>>;
  }>;
};

export type PageInfoFragment = {
  total?: Maybe<number>;
  currentPage?: Maybe<number>;
  lastPage?: Maybe<number>;
  perPage?: Maybe<number>;
  hasNextPage?: Maybe<boolean>;
};

export type MediaFragment = {
  id: number;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  countryOfOrigin?: Maybe<any>;
  popularity?: Maybe<number>;
  averageScore?: Maybe<number>;
  meanScore?: Maybe<number>;
  seasonYear?: Maybe<number>;
  startDate?: Maybe<{ year?: Maybe<number> }>;
  isAdult?: Maybe<boolean>;
  genres?: Maybe<Array<Maybe<string>>>;
  duration?: Maybe<number>;
  episodes?: Maybe<number>;
  chapters?: Maybe<number>;
  title?: Maybe<TitleFragment>;
  coverImage?: Maybe<CoverImageFragment>;
  studios?: Maybe<{ nodes?: Maybe<Array<Maybe<{ name: string }>>> }>;
};

export type TitleFragment = {
  english?: Maybe<string>;
  romaji?: Maybe<string>;
  native?: Maybe<string>;
};

export type CoverImageFragment = {
  large?: Maybe<string>;
  color?: Maybe<string>;
};
