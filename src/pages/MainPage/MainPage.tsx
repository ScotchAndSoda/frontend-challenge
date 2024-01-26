import { MainScreenContainer } from './MainPage.styled';
import { VideoBox } from '../../components/VideoBox';
import { ObjectMenu } from '../../components/ObjectMenu';
import { useGetPersonsQuery } from '../../queries/getPersons.query';
import { useState } from 'react';
import { TimeSpansApi } from '../../types';
import { Error } from '../../components/Error';

export const MainPage = () => {
  const { isLoading, error } = useGetPersonsQuery();
  const [timespans, setTimespans] = useState<TimeSpansApi>([]);

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <Error />;
  }

  return (
    <MainScreenContainer>
      <VideoBox timespans={timespans} />
      <ObjectMenu onSetTimespans={setTimespans} />
    </MainScreenContainer>
  );
};
