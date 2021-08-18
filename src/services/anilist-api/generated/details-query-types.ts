import {
  Exact,
  Maybe,
  MediaFormat,
  MediaSource,
  MediaStatus,
  Scalars,
} from './schema-types';

export type DetailsQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;

export type DetailsQuery = { Media?: Maybe<MediaFragment> };

export type MediaFragment = {
  id: number;
  description?: Maybe<string>;
  format?: Maybe<MediaFormat>;
  source?: Maybe<MediaSource>;
  status?: Maybe<MediaStatus>;
  countryOfOrigin?: Maybe<any>;
  popularity?: Maybe<number>;
  averageScore?: Maybe<number>;
  meanScore?: Maybe<number>;
  seasonYear?: Maybe<number>;
  isAdult?: Maybe<boolean>;
  genres?: Maybe<Array<Maybe<string>>>;
  duration?: Maybe<number>;
  episodes?: Maybe<number>;
  chapters?: Maybe<number>;
  volumes?: Maybe<number>;
  bannerImage?: Maybe<string>;
  title?: Maybe<TitleFragment>;
  startDate?: Maybe<{ year?: Maybe<number> }>;
  endDate?: Maybe<{ year?: Maybe<number> }>;
  coverImage?: Maybe<CoverFragment>;
  trailer?: Maybe<TrailerFragment>;
  characters?: Maybe<{ nodes?: Maybe<Array<Maybe<CharacterFragment>>> }>;
  studios?: Maybe<{ nodes?: Maybe<Array<Maybe<{ name: string }>>> }>;
  externalLinks?: Maybe<Array<Maybe<ExternalLinksFragment>>>;
};

export type TitleFragment = {
  english?: Maybe<string>;
  romaji?: Maybe<string>;
  native?: Maybe<string>;
};

export type CoverFragment = {
  large?: Maybe<string>;
  extraLarge?: Maybe<string>;
  color?: Maybe<string>;
};

export type TrailerFragment = {
  id?: Maybe<string>;
  site?: Maybe<string>;
  thumbnail?: Maybe<string>;
};

export type ExternalLinksFragment = { id: number; site: string; url: string };

export type CharacterFragment = {
  id: number;
  gender?: Maybe<string>;
  age?: Maybe<string>;
  name?: Maybe<{ full?: Maybe<string> }>;
  image?: Maybe<{ medium?: Maybe<string>; large?: Maybe<string> }>;
};
