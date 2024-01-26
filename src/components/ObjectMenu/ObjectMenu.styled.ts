import styled, { css } from 'styled-components';

export const ObjectMenuStyled = styled.div`
  height: 100%;
`;

export const ObjectMenuSelector = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
`;

export const MenuOption = styled.div<{ selected: boolean }>`
  width: 50%;
  padding: 0.5em 1em;
  cursor: pointer;
  border-bottom: ${({ theme }) => theme.colors.primary} 2px solid;

  ${({ selected }) => selected && ObjectMenuOptionSelected}
`;

const ObjectMenuOptionSelected = css`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;
