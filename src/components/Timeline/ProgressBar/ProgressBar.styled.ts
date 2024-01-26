import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ProgressBarStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 50%;
`;
