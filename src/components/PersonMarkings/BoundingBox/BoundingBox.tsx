import { PropsWithChildren } from 'react';
import { BoundingBoxApi } from '../../../types';
import { BoundingBoxContainer } from './BoundingBox.styled';

export const BoundingBox = ({
  boundingBox,
  ...props
}: PropsWithChildren<{
  boundingBox: BoundingBoxApi;
}>) => {
  return (
    <BoundingBoxContainer
      style={{
        height: boundingBox.Height,
        width: boundingBox.Width,
        left: boundingBox.Left,
        top: boundingBox.Top,
      }}
      {...props}
    />
  );
};
