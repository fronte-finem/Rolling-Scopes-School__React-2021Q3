import { EMAIL_REGEX } from 'shared/regex/email';

export const dateToString = (date: Date) => date.toISOString().split('T')[0];

export interface ValidateText {
  message: string;
  isValid: (value: string) => boolean;
}

interface ValidateDate {
  message: string;
  isValid: (value: Date | null) => boolean;
}

export interface ValidateBoolean {
  message: string;
  isValid: (value: boolean) => boolean;
}

export const VALIDATE_NAME: ValidateText = {
  message: 'Name is limited to 3-30 alphabet characters',
  isValid: (value: string) => /^\p{Alpha}{3,30}$/u.test(value),
};

export const VALIDATE_EMAIL: ValidateText = {
  message: 'Email invalid according RFC 5322 Official Standard',
  isValid: (value: string) => EMAIL_REGEX.test(value),
};

export const MAX_DATE = new Date();
export const MIN_DATE = new Date();

MIN_DATE.setFullYear(MAX_DATE.getFullYear() - 120);

const isDateClamp = (date: number) =>
  date >= MIN_DATE.getTime() && date <= MAX_DATE.getTime();

export const VALIDATE_DATE: ValidateDate = {
  message: `Date invalid if unset or before ${dateToString(
    MIN_DATE
  )} or after ${dateToString(MAX_DATE)}`,
  isValid: (value: Date | null) =>
    value !== null && isDateClamp(value.getTime()),
};

export const VALIDATE_AGREEMENT: ValidateBoolean = {
  message: 'Agreement required for submit 🤝',
  isValid: (value: boolean) => value,
};
