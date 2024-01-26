import { useCallback, useState } from 'react';
import { PersonTimespanApi, TimeSpansApi } from '../../../types';
import { PersonFace } from '../PersonFace';
import { useGetPersonsQuery } from '../../../queries/getPersons.query';

export const FacesMenu = ({
  onClick,
}: {
  onClick: (timespans: TimeSpansApi) => void;
}) => {
  const { data: persons } = useGetPersonsQuery();
  const [selectedPerson, selectPerson] = useState<number | null>(null);

  const handleFaceClick = useCallback(
    (personTimespan: PersonTimespanApi) => {
      selectPerson(personTimespan.PersonIndex);
      onClick(personTimespan.TimeSpans);
    },
    [onClick],
  );

  return (
    <>
      {persons?.PersonTimeSpans.map((timespan) => (
        <PersonFace
          key={timespan.PersonIndex}
          personIndex={timespan.PersonIndex}
          selected={timespan.PersonIndex === selectedPerson}
          onClick={() => handleFaceClick(timespan)}
        />
      ))}
    </>
  );
};
