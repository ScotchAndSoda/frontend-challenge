import { useQuery } from 'react-query';
import { PersonApi } from '../types/api';
import { api } from '../api';

export const useGetPersonsQuery = () => {
  return useQuery<PersonApi>({
    queryKey: ['persons'],
    queryFn: () => fetch(api.personsUrl).then((res) => res.json()),
  });
};
