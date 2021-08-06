import { LANGUAGE_MAP } from 'shared/data/language-map';
import {
  VALIDATE_AGREEMENT,
  VALIDATE_DATE,
  VALIDATE_EMAIL,
  VALIDATE_NAME,
} from './validation';
import { GENDER } from './static-props';
import { getUUIDv4 } from '../../shared/random/uuid';

interface InputState<T> {
  value: T;
  isError: boolean;
}

interface InputStateX<T> extends InputState<T> {
  validate: (value: T) => boolean;
}

export interface PersonFormState {
  firstName: InputStateX<string>;
  lastName: InputStateX<string>;
  email: InputStateX<string>;
  gender: InputStateX<string>;
  birthdate: InputStateX<Date | null>;
  language: InputStateX<string>;
  agreement: InputStateX<boolean>;
}

export type InferInputStateGenericType<ISX> = ISX extends InputStateX<infer T>
  ? T
  : never;

export type PersonFormDataClean = {
  [K in keyof PersonFormState]: InferInputStateGenericType<PersonFormState[K]>;
};

export type PersonFormData = PersonFormDataClean & {
  id: string;
};

export function stateToData({
  firstName,
  lastName,
  email,
  gender,
  birthdate,
  language,
  agreement,
}: PersonFormState): PersonFormData {
  return {
    id: getUUIDv4(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    gender: gender.value,
    birthdate: birthdate.value,
    language: language.value,
    agreement: agreement.value,
  };
}

export function validate<K extends keyof PersonFormState>(
  state: PersonFormState,
  key: K,
  value: InferInputStateGenericType<PersonFormState[K]>
): PersonFormState {
  const prev = state[key] as unknown as InputStateX<typeof value>;
  const isError = !prev.validate(value);
  return { ...state, [key]: { ...prev, value, isError } };
}

export function invalidate<K extends keyof PersonFormState>(
  state: PersonFormState,
  key: K
): PersonFormState {
  const prev = state[key];
  return { ...state, [key]: { ...prev, isError: true } };
}

export function isValid(state: PersonFormState): boolean {
  return Object.values(state).every((item) => !item.isError);
}

export const INITIAL_PERSON_FORM_STATE: PersonFormState = {
  firstName: {
    value: '',
    isError: false,
    validate: (value: string) => VALIDATE_NAME.isValid(value),
  },
  lastName: {
    value: '',
    isError: false,
    validate: (value: string) => VALIDATE_NAME.isValid(value),
  },
  email: {
    value: '',
    isError: false,
    validate: (value: string) => VALIDATE_EMAIL.isValid(value),
  },
  gender: {
    value: GENDER.value1,
    isError: false,
    validate: () => true,
  },
  birthdate: {
    value: null,
    isError: false,
    validate: (value: Date | null) => VALIDATE_DATE.isValid(value),
  },
  language: {
    value: LANGUAGE_MAP.keys().next().value,
    isError: false,
    validate: () => true,
  },
  agreement: {
    value: false,
    isError: false,
    validate: (value: boolean) => VALIDATE_AGREEMENT.isValid(value),
  },
};
