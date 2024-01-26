import { LandmarkApi } from '../../../types';
import { FaceLandmarkStyled } from './FaceLandmark.styled';

export const FaceLandmark = ({ landmark }: { landmark: LandmarkApi }) => {
  return <FaceLandmarkStyled style={{ left: landmark.X, top: landmark.Y }} />;
};
