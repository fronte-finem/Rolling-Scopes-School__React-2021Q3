import React, { useState } from 'react';
import {
  InputText,
  InputTextProps,
  ValidateTextProps,
} from 'components/input/text';
import { dateToString, InputDate } from 'components/input/date';
import { Select } from 'components/input/select';
import { Checkbox } from 'components/input/checkbox';
import { Switcher, SwitcherProps } from 'components/input/switcher';
import { LANGUAGE_MAP } from 'shared/data/language-map';
import { EMAIL_REGEX } from 'shared/regex/email';
import classes from './person-form.module.css';

const VALIDATE_NAME: ValidateTextProps = {
  message: 'Name is limited to 3-30 alphabet characters',
  isValid: (value: string) => /^\p{Alpha}{3,30}$/u.test(value),
};

const VALIDATE_EMAIL: ValidateTextProps = {
  message: 'Email invalid according RFC 5322 Official Standard',
  isValid: (value: string) => EMAIL_REGEX.test(value),
};

interface ValidateDate {
  message: string;
  isValid: (value: Date | null) => boolean;
}

const MAX_DATE = new Date();
const MIN_DATE = new Date();
MIN_DATE.setFullYear(MAX_DATE.getFullYear() - 120);

const isDateClamp = (date: number) =>
  date >= MIN_DATE.getTime() && date <= MAX_DATE.getTime();

const VALIDATE_DATE: ValidateDate = {
  message: `Date invalid if unset or before ${dateToString(
    MIN_DATE
  )} or after ${dateToString(MAX_DATE)}`,
  isValid: (value: Date | null) =>
    value !== null && isDateClamp(value.getTime()),
};

type InputTextConst = Pick<
  InputTextProps,
  'id' | 'label' | 'placeholder' | 'required'
>;

const FIRST_NAME: InputTextConst = {
  id: 'first-name',
  label: 'First name:',
  placeholder: 'Jane',
  required: true,
};

const LAST_NAME: InputTextConst = {
  id: 'last-name',
  label: 'Last name:',
  placeholder: 'Doe',
  required: true,
};

const EMAIL: InputTextConst = {
  id: 'email',
  label: 'Email:',
  placeholder: 'jane-doe@e.mail',
  required: true,
};

const GENDER: Omit<SwitcherProps, 'onChange'> = {
  id: 'gender',
  label: 'Gender:',
  value1: 'female',
  value2: 'male',
};

interface InputState<T> {
  value: T;
  isError: boolean;
}

interface PersonFormState {
  firstName: InputState<string>;
  lastName: InputState<string>;
  email: InputState<string>;
  gender: InputState<string>;
  birthdate: InputState<Date | null>;
  isStudent: InputState<boolean>;
  language: InputState<string>;
}

const INITIAL_PERSON_FORM_STATE = {
  firstName: { value: '', isError: false },
  lastName: { value: '', isError: false },
  email: { value: '', isError: false },
  gender: { value: GENDER.value1, isError: false },
  birthdate: { value: null, isError: false },
  isStudent: { value: false, isError: false },
  language: { value: LANGUAGE_MAP.keys().next().value, isError: false },
};

export const PersonForm: React.FC = () => {
  const [data, setData] = useState<PersonFormState>(INITIAL_PERSON_FORM_STATE);

  const handleReset = () => {
    setData(INITIAL_PERSON_FORM_STATE);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleName = (key: keyof PersonFormState) => (value: string) => {
    const isError = !VALIDATE_NAME.isValid(value);
    setData((prev) => ({ ...prev, [key]: { value, isError } }));
  };

  const handleEmail = (value: string) => {
    const isError = !VALIDATE_EMAIL.isValid(value);
    setData((prev) => ({ ...prev, email: { value, isError } }));
  };

  const handleDate = (value: Date | null) => {
    const isError = !VALIDATE_DATE.isValid(value);
    setData((prev) => ({ ...prev, birthdate: { value, isError } }));
  };

  const handleGender = (value: string) => {
    setData((prev) => ({ ...prev, gender: { value, isError: false } }));
  };

  return (
    <form className={classes.personForm} onSubmit={handleSubmit}>
      <InputText
        {...FIRST_NAME}
        onInput={handleName('firstName')}
        value={data.firstName.value}
        error={{
          isError: data.firstName.isError,
          message: VALIDATE_NAME.message,
        }}
      />

      <InputText
        {...LAST_NAME}
        onInput={handleName('lastName')}
        value={data.lastName.value}
        error={{
          isError: data.lastName.isError,
          message: VALIDATE_NAME.message,
        }}
      />

      <InputText
        {...EMAIL}
        onInput={handleEmail}
        value={data.email.value}
        error={{ isError: data.email.isError, message: VALIDATE_EMAIL.message }}
      />

      <Switcher {...GENDER} onChange={handleGender} />

      <InputDate
        id="birthdate"
        label="Birthdate:"
        onInput={handleDate}
        value={
          data.birthdate.value
            ? data.birthdate.value?.toISOString().split('T')[0]
            : ''
        }
        min={dateToString(MIN_DATE)}
        max={dateToString(MAX_DATE)}
        error={{
          isError: data.birthdate.isError,
          message: VALIDATE_DATE.message,
        }}
      />

      <Checkbox id="is-student" label="I'm student:" />

      <Select id="language" label="Main coding language:" data={LANGUAGE_MAP} />

      <div className={classes.buttons}>
        <button className={classes.button} type="button" onClick={handleReset}>
          Reset
        </button>
        <button className={classes.button} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
