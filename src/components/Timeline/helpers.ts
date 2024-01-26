export const calculateTimelineSegments = ({
  timespans,
  videoDuration,
  timelineWidth,
}: {
  timespans: number[];
  videoDuration: number;
  timelineWidth: number;
}) => {
  const framesPerPixel = (videoDuration * 1000) / timelineWidth;
  const joinedSegments = Array.from(
    { length: Math.ceil(timespans.length / 2) },
    (_, i) => timespans.slice(i * 2, i * 2 + 2),
  );

  return joinedSegments.map((segment) => ({
    offset: segment[0] / framesPerPixel,
    width: segment[1] / framesPerPixel,
    startTime: segment[0],
  }));
};
