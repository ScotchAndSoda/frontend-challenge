import styled, { css } from 'styled-components';

export const PersonFaceContainer = styled.div<{ selected: boolean }>`
  display: inline-block;
  cursor: pointer;
  position: relative;
  border: ${({ theme }) => theme.colors.white} 2px solid;
  height: 128px;
  width: 128px;
  margin: 4px;
  ${({ selected }) => selected && PersonFaceContainerSelected};
`;

const PersonFaceContainerSelected = css`
  border: #09d3ac 2px solid;
`;

export const PersonFaceLabel = styled.span`
  top: 2px;
  left: 2px;
  font-size: ${({ theme }) => theme.colors.primary};
  text-shadow:
    -1px -1px 0 ${({ theme }) => theme.colors.secondary},
    1px -1px 0 ${({ theme }) => theme.colors.secondary},
    -1px 1px 0 ${({ theme }) => theme.colors.secondary},
    1px 1px 0 ${({ theme }) => theme.colors.secondary};
  line-height: 1em;
  font-weight: 600;
  position: absolute;
`;
