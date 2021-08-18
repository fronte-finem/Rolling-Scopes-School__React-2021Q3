/** ISO 3166-1 alpha-2 country code */

import { mapGetter } from './maybe';

export const CountryCodeMap: Map<string, string> = new Map([
  ['JP', 'japan'],
  ['KR', 'south-korea'],
  ['CN', 'china'],
  ['TW', 'taiwan'],
]);

export const getCountry = mapGetter(CountryCodeMap);
