import { InputStaticProps } from 'components/input/types';
import { SwitcherStaticProps } from 'components/input/switcher';
import { InputDateStaticProps } from 'components/input/date';
import { SelectStaticProps } from 'components/input/select';
import { RadioSwitcherStaticProps } from 'components/input/radio-switcher';
import { InputTextStaticProps, InputTextType } from 'components/input/text';
import { LANGUAGE_MAP } from 'shared/data/language-map';
import {
  dateToString,
  MAX_DATE,
  MIN_DATE,
  VALIDATE_AGREEMENT,
  VALIDATE_DATE,
  VALIDATE_EMAIL,
  VALIDATE_NAME,
} from './validation';

export const FIRST_NAME: InputTextStaticProps = {
  type: InputTextType.TEXT,
  id: 'first-name',
  label: 'First name:',
  placeholder: 'Jane',
  required: true,
  errorMessage: VALIDATE_NAME.message,
};

export const LAST_NAME: InputTextStaticProps = {
  type: InputTextType.TEXT,
  id: 'last-name',
  label: 'Last name:',
  placeholder: 'Doe',
  required: true,
  errorMessage: VALIDATE_NAME.message,
};

export const EMAIL: InputTextStaticProps = {
  type: InputTextType.EMAIL,
  id: 'email',
  label: 'Email:',
  placeholder: 'jane-doe@e.mail',
  required: true,
  errorMessage: VALIDATE_EMAIL.message,
};

export const GENDER: SwitcherStaticProps = {
  id: 'gender',
  label: 'Gender:',
  value1: 'female',
  value2: 'male',
  required: true,
};

export const BIRTHDATE: InputDateStaticProps = {
  id: 'birthdate',
  label: 'Birthdate:',
  required: true,
  errorMessage: VALIDATE_DATE.message,
  min: dateToString(MIN_DATE),
  max: dateToString(MAX_DATE),
};

export const LANGUAGE: SelectStaticProps = {
  id: 'language',
  label: 'I ❤️ language:',
  required: true,
  data: LANGUAGE_MAP,
};

export const AGREEMENT: InputStaticProps = {
  id: 'agreement',
  label: 'I agree to submit:',
  required: true,
  errorMessage: VALIDATE_AGREEMENT.message,
};
