import React from 'react';
import { PersonFormData } from 'components/person-form/state';
import { LANGUAGE_MAP } from 'shared/data/language-map';
import classes from './person-card.module.css';
import { PersonCardItem } from './person-card-item';

interface PersonCardProps {
  data: PersonFormData;
}

export const PersonCard: React.FC<PersonCardProps> = ({ data }) => {
  return (
    <dl className={classes.card}>
      <PersonCardItem term="First name" description={data.firstName} />
      <PersonCardItem term="Last name" description={data.lastName} />
      <PersonCardItem term="Email" description={data.email} />
      <PersonCardItem term="Gender" description={data.gender} />
      <PersonCardItem
        term="Birthdate"
        description={data.birthdate?.toLocaleDateString() || 'unknown'}
      />
      <PersonCardItem
        term="Coding language"
        description={LANGUAGE_MAP.get(data.language) || 'unknown'}
      />
      <PersonCardItem term="Reaction" description={data.reaction} />
    </dl>
  );
};
