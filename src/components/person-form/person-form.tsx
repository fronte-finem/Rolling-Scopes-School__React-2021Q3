import React, { useState } from 'react';
import { InputText } from 'components/input/text';
import { InputDate } from 'components/input/date';
import { Select } from 'components/input/select';
import { Checkbox } from 'components/input/checkbox';
import { Switcher } from 'components/input/switcher';
import { RadioSwitcher } from 'components/input/radio-switcher';
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
  REACTION,
} from './static-props';
import {
  InferInputStateGenericType,
  INITIAL_PERSON_FORM_STATE,
  invalidate,
  isValid,
  PersonFormData,
  PersonFormState,
  mapStateToData,
  validate,
} from './state';
import { dateToString } from './validation';

interface PersonFormProps {
  onSubmit?: (data: PersonFormData) => void;
}

export const PersonForm: React.FC<PersonFormProps> = ({ onSubmit }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [personFormState, setPersonFormState] = useState(
    INITIAL_PERSON_FORM_STATE
  );

  const handleReset = () => {
    setSuccess(false);
    setPersonFormState(INITIAL_PERSON_FORM_STATE);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setSuccess(false);
    event.preventDefault();
    if (!isValid(personFormState)) return;
    onSubmit?.(mapStateToData(personFormState));
    handleReset();
    setSuccess(true);
  };

  function handleInput<K extends keyof PersonFormState>(key: K) {
    return (value: InferInputStateGenericType<PersonFormState[K]>) => {
      setSuccess(false);
      setPersonFormState((prev) => validate(prev, key, value));
    };
  }

  function handleInvalid<K extends keyof PersonFormState>(key: K) {
    return () => {
      setSuccess(false);
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

        <RadioSwitcher
          {...REACTION}
          onChange={handleInput('reaction')}
          onInvalid={handleInvalid('reaction')}
          value={personFormState.reaction.value}
          isError={personFormState.reaction.isError}
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

      {success ? (
        <div className={classes.success}>Data saved successfully 😃</div>
      ) : null}
    </form>
  );
};
