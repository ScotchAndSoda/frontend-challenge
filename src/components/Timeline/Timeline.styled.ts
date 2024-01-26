import styled from 'styled-components';

export const TimelineContainer = styled.div`
  box-sizing: content-box;
  position: relative;
  height: 2em;
  border: ${({ theme }) => theme.colors.primary} 3px solid;
  border-radius: 4px;
`;
