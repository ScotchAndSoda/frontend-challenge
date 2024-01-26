import { LabelStyled } from './Label.styled';

export const Label = ({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <LabelStyled selected={selected} onClick={onClick}>
    {name}
  </LabelStyled>
);
