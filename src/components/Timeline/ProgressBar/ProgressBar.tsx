import { ProgressBarContainer, ProgressBarStyled } from './ProgressBar.styled';
import React from 'react';

export const ProgressBar = ({
  width,
  onClick,
}: {
  width: number;
  onClick: (xCoordinate: number) => void;
}) => {
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(e.clientX - e.currentTarget.getBoundingClientRect().x);
  };

  return (
    <ProgressBarContainer onClick={handleProgressBarClick}>
      <ProgressBarStyled style={{ width: `${width}%` }} />
    </ProgressBarContainer>
  );
};
