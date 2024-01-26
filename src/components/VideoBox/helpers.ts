import { PersonMarking, TimestampApi } from '../../types';

export const calculatePersonMarking = ({
  timestamp,
  clientHeight,
  clientWidth,
  videoHeight,
  videoWidth,
}: {
  timestamp: TimestampApi;
  clientHeight: number;
  clientWidth: number;
  videoHeight: number;
  videoWidth: number;
}): PersonMarking => {
  const ratio = Math.min(clientWidth / videoWidth, clientHeight / videoHeight);
  const actualHeight = videoHeight * ratio;
  const actualWidth = videoWidth * ratio;
  const topOffset = (clientHeight - actualHeight) / 2;
  const leftOffset = (clientWidth - actualWidth) / 2;
  return {
    boundingBox: {
      Height: timestamp.BoundingBox.Height * actualHeight,
      Width: timestamp.BoundingBox.Width * actualWidth,
      Top: timestamp.BoundingBox.Top * actualHeight + topOffset,
      Left: timestamp.BoundingBox.Left * actualWidth + leftOffset,
    },
    index: timestamp.Index,
    face: timestamp.Face
      ? {
          BoundingBox: {
            Height: timestamp.Face.BoundingBox.Height * actualHeight,
            Width: timestamp.Face.BoundingBox.Width * actualWidth,
            Top: timestamp.Face.BoundingBox.Top * actualHeight + topOffset,
            Left: timestamp.Face.BoundingBox.Left * actualWidth + leftOffset,
          },
          Landmarks: timestamp.Face.Landmarks.map((l) => ({
            X: l.X * actualWidth + leftOffset,
            Y: l.Y * actualHeight + topOffset,
          })),
        }
      : undefined,
  };
};
