import { useQuery } from 'react-query';
import { LabelApi } from '../types/api';
import { api } from '../api';

export const useGetLabelsQuery = () => {
  return useQuery<LabelApi[]>({
    queryKey: ['labels'],
    queryFn: () => fetch(api.labelsUrl).then((res) => res.json()),
  });
};
