import styled from 'styled-components';

export const SegmentStyled = styled.div<{
  width: number;
  offset: number;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary}80;
  border: ${({ theme }) => theme.colors.primary} 1px solid;
  top: 0;
  height: 100%;
  cursor: pointer;
  width: ${({ width }) => width}px;
  left: ${({ offset }) => offset}px;
`;
