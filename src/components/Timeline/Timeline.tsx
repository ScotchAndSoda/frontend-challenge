import { useCallback, useEffect, useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { TimelineContainer } from './Timeline.styled';
import { Segment } from './Segment';
import { calculateTimelineSegments } from './helpers';
import useResizeObserver from 'use-resize-observer';

type TimelineSegment = {
  offset: number;
  width: number;
  startTime: number;
};

export const Timeline = ({
  timespans,
  videoDuration,
  percentagePlayed,
  onClick,
}: {
  timespans: number[];
  videoDuration: number;
  percentagePlayed: number;
  onClick: (percentage: number) => void;
}) => {
  const { ref: timeline, width: timelineWidth = 0 } =
    useResizeObserver<HTMLDivElement>();
  const [segments, setSegments] = useState<TimelineSegment[]>([]);

  useEffect(() => {
    setSegments(
      calculateTimelineSegments({ timespans, videoDuration, timelineWidth }),
    );
  }, [timespans, videoDuration, timelineWidth]);

  const handleSegmentClick = (segment: TimelineSegment) => {
    onClick(segment.startTime / (videoDuration * 1000));
  };

  const handleProgressBarClick = useCallback(
    (xCoordinate: number) => {
      onClick(xCoordinate / timelineWidth);
    },
    [timelineWidth, onClick],
  );

  return (
    <TimelineContainer ref={timeline}>
      {segments.map((segment) => (
        <Segment
          key={segment.startTime}
          offset={segment.offset}
          width={segment.width}
          onClick={() => handleSegmentClick(segment)}
        />
      ))}
      <ProgressBar width={percentagePlayed} onClick={handleProgressBarClick} />
    </TimelineContainer>
  );
};
