import styled from 'styled-components';
import { BoundingBox } from '../BoundingBox/BoundingBox';

export const PersonBoxContainer = styled(BoundingBox)`
  border: ${({ theme }) => theme.colors.primary} 2px solid;
`;

export const PersonBoxLabel = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.small};
  float: left;
`;

export const FaceBoxContainer = styled(BoundingBox)`
  border: ${({ theme }) => theme.colors.tertiary} 2px solid;
`;
