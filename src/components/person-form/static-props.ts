import { InputStaticProps } from 'components/input/types';
import { SwitcherStaticProps } from 'components/input/switcher';
import { InputDateStaticProps } from 'components/input/date';
import {
  dateToString,
  MAX_DATE,
  MIN_DATE,
  VALIDATE_AGREEMENT,
  VALIDATE_DATE,
  VALIDATE_EMAIL,
  VALIDATE_NAME,
} from './validation';
import { SelectStaticProps } from '../input/select';
import { LANGUAGE_MAP } from '../../shared/data/language-map';

export const FIRST_NAME: InputStaticProps = {
  id: 'first-name',
  label: 'First name:',
  placeholder: 'Jane',
  required: true,
  errorMessage: VALIDATE_NAME.message,
};

export const LAST_NAME: InputStaticProps = {
  id: 'last-name',
  label: 'Last name:',
  placeholder: 'Doe',
  required: true,
  errorMessage: VALIDATE_NAME.message,
};

export const EMAIL: InputStaticProps = {
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
  label: 'Main coding language:',
  required: true,
  data: LANGUAGE_MAP,
};

export const AGREEMENT: InputStaticProps = {
  id: 'agreement',
  label: 'I agree to have my personal data processed:',
  required: true,
  errorMessage: VALIDATE_AGREEMENT.message,
};
