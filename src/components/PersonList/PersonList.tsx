import { memo } from 'react';
import { PersonListStyled } from './PersonList.styled';
import { PersonMarking } from '../../types';

export const PersonList = memo(
  ({ personMarkings }: { personMarkings: PersonMarking[] }) => {
    return (
      <PersonListStyled>
        {personMarkings.map((p) => (
          <li key={p.index}>Person: {p.index}</li>
        ))}
      </PersonListStyled>
    );
  },
);
