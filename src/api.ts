import { PersonTimespanApi } from './types';

const apiEndpoint = 'http://localhost:5253/api/data/video';
const fileId = 'video-0002';

export const api = {
  videoUrl: `${apiEndpoint}/${fileId}/mp4`,
  labelsUrl: `${apiEndpoint}/${fileId}/labels`,
  personsUrl: `${apiEndpoint}/${fileId}/persons`,
  faceImageUrl: (id: PersonTimespanApi['PersonIndex']) =>
    `${apiEndpoint}/${fileId}/faces/${id}`,
};
