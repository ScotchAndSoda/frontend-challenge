import { PersonMarking } from '../../../types';
import {
  FaceBoxContainer,
  PersonBoxContainer,
  PersonBoxLabel,
} from './PersonBox.styled';
import { FaceLandmark } from '../FaceLandmark/FaceLandmark';

export const PersonBox = ({
  personMarking,
}: {
  personMarking: PersonMarking;
}) => {
  return (
    <>
      <PersonBoxContainer boundingBox={personMarking.boundingBox}>
        <PersonBoxLabel>Person: {personMarking.index}</PersonBoxLabel>
      </PersonBoxContainer>
      {personMarking.face && (
        <>
          <FaceBoxContainer boundingBox={personMarking.face.BoundingBox} />
          {personMarking.face.Landmarks.map((landmark) => (
            <FaceLandmark landmark={landmark} />
          ))}
        </>
      )}
    </>
  );
};
