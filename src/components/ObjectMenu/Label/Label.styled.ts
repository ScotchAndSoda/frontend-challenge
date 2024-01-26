import styled, { css } from 'styled-components';

const LabelStyledSelected = css`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LabelStyled = styled.span<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  line-height: 1.5;
  padding: 0.1rem 0.5rem;
  margin: 0.1rem 0.2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  white-space: nowrap;
  cursor: pointer;
  ${({ selected }) => selected && LabelStyledSelected};
`;
