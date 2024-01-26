import { PersonTimespanApi } from '../../../types/api';
import { PersonFaceContainer, PersonFaceLabel } from './PersonFace.styled';
import { api } from '../../../api';

export const PersonFace = ({
  personIndex,
  selected,
  onClick,
}: {
  personIndex: PersonTimespanApi['PersonIndex'];
  selected: boolean;
  onClick: () => void;
}) => (
  <PersonFaceContainer key={personIndex} selected={selected} onClick={onClick}>
    <PersonFaceLabel>{personIndex}</PersonFaceLabel>
    <img alt={`Person ${personIndex}`} src={api.faceImageUrl(personIndex)} />
  </PersonFaceContainer>
);
