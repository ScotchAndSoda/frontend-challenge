import styled from 'styled-components';

export const PersonListStyled = styled.ul`
  list-style-type: none;
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.medium};

  text-shadow:
    -1px -1px 0 ${({ theme }) => theme.colors.black},
    1px -1px 0 ${({ theme }) => theme.colors.black},
    -1px 1px 0 ${({ theme }) => theme.colors.black},
    1px 1px 0 ${({ theme }) => theme.colors.black};
`;
