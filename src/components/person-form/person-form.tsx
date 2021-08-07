import React, { useState } from 'react';
import { InputText } from 'components/input/text';
import { InputDate } from 'components/input/date';
import { Select } from 'components/input/select';
import { Checkbox } from 'components/input/checkbox';
import { Switcher } from 'components/input/switcher';
import btnClasses from 'components/button/button.module.css';
import classes from './person-form.module.css';
import {
  AGREEMENT,
  BIRTHDATE,
  EMAIL,
  FIRST_NAME,
  GENDER,
  LANGUAGE,
  LAST_NAME,
} from './static-props';
import {
  InferInputStateGenericType,
  INITIAL_PERSON_FORM_STATE,
  invalidate,
  isValid,
  PersonFormData,
  PersonFormState,
  stateToData,
  validate,
} from './state';
import { dateToString } from './validation';

interface PersonFormProps {
  onSubmit?: (data: PersonFormData) => void;
}

export const PersonForm: React.FC<PersonFormProps> = ({ onSubmit }) => {
  const [personFormState, setPersonFormState] = useState(
    INITIAL_PERSON_FORM_STATE
  );

  const handleReset = () => {
    setPersonFormState(INITIAL_PERSON_FORM_STATE);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid(personFormState)) return;
    onSubmit?.(stateToData(personFormState));
    handleReset();
  };

  function handleInput<K extends keyof PersonFormState>(key: K) {
    return (value: InferInputStateGenericType<PersonFormState[K]>) => {
      setPersonFormState((prev) => validate(prev, key, value));
    };
  }

  function handleInvalid<K extends keyof PersonFormState>(key: K) {
    return () => {
      setPersonFormState((prev) => invalidate(prev, key));
    };
  }

  return (
    <form className={classes.personForm} onSubmit={handleSubmit}>
      <div className={classes.inputs}>
        <InputText
          {...FIRST_NAME}
          onInput={handleInput('firstName')}
          onInvalid={handleInvalid('firstName')}
          value={personFormState.firstName.value}
          isError={personFormState.firstName.isError}
        />

        <InputText
          {...LAST_NAME}
          onInput={handleInput('lastName')}
          onInvalid={handleInvalid('lastName')}
          value={personFormState.lastName.value}
          isError={personFormState.lastName.isError}
        />

        <InputText
          {...EMAIL}
          onInput={handleInput('email')}
          onInvalid={handleInvalid('email')}
          value={personFormState.email.value}
          isError={personFormState.email.isError}
        />

        <Switcher
          {...GENDER}
          onChange={handleInput('gender')}
          onInvalid={handleInvalid('gender')}
          value={personFormState.gender.value}
        />

        <InputDate
          {...BIRTHDATE}
          onInput={handleInput('birthdate')}
          onInvalid={handleInvalid('birthdate')}
          value={
            personFormState.birthdate.value
              ? dateToString(personFormState.birthdate.value)
              : ''
          }
          isError={personFormState.birthdate.isError}
        />

        <Select
          {...LANGUAGE}
          onInput={handleInput('language')}
          onInvalid={handleInvalid('language')}
          value={personFormState.language.value}
          isError={personFormState.language.isError}
        />

        <Checkbox
          {...AGREEMENT}
          onChange={handleInput('agreement')}
          onInvalid={handleInvalid('agreement')}
          value={personFormState.agreement.value}
          isError={personFormState.agreement.isError}
        />
      </div>

      <div className={classes.buttons}>
        <button
          className={`${btnClasses.button} ${btnClasses.secondary}`}
          type="button"
          onClick={handleReset}>
          Reset
        </button>
        <button className={btnClasses.button} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
