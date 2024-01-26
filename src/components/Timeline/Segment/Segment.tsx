import { SegmentStyled } from './Segment.styled';

export const Segment = ({
  offset,
  width,
  onClick,
}: {
  offset: number;
  width: number;
  onClick: () => void;
}) => {
  return <SegmentStyled width={width} offset={offset} onClick={onClick} />;
};
