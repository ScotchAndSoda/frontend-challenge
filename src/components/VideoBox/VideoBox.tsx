import { useCallback, useEffect, useRef, useState } from 'react';
import { PersonBox } from '../PersonMarkings';
import { PersonList } from '../PersonList';
import { Timeline } from '../Timeline';
import { PersonMarking, TimeSpansApi } from '../../types';
import { Video, VideoBoxContainer, VideoContainer } from './VideoBox.styled';
import { calculatePersonMarking } from './helpers';
import { api } from '../../api';
import { useGetPersonsQuery } from '../../queries/getPersons.query';

export const VideoBox = ({ timespans }: { timespans: TimeSpansApi }) => {
  const { data: persons } = useGetPersonsQuery();
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [percentagePlayed, setPercentagePlayed] = useState(0);
  const [personMarkings, setPersonMarkings] = useState<PersonMarking[]>([]);

  useEffect(() => recalculateFrameElements(), [videoIsPlaying]);

  const handleVideoTimeUpdate = useCallback(() => {
    if (!videoPlayer.current) return;
    const { currentTime } = videoPlayer.current;
    const percentage = videoDuration ? (currentTime / videoDuration) * 100 : 0;
    setPercentagePlayed(percentage);
  }, [videoPlayer, videoDuration]);

  const handleTimelineClicked = useCallback(
    (percentage: number) => {
      if (videoPlayer.current) {
        videoPlayer.current.currentTime =
          videoPlayer.current.duration * percentage;
        handleVideoTimeUpdate();
      }
    },
    [videoPlayer, handleVideoTimeUpdate],
  );

  const handleVideoMetadataLoaded = useCallback(() => {
    if (videoPlayer.current) {
      setVideoDuration(videoPlayer.current.duration);
    }
  }, [videoPlayer]);

  const recalculateFrameElements = () => {
    if (!videoPlayer.current) return;
    if (videoPlayer.current.paused || !persons) return;

    const { currentTime, clientWidth, clientHeight, videoHeight, videoWidth } =
      videoPlayer.current;

    const closestTimestampKey =
      Math.floor((currentTime * 1000) / persons.FrameStep) * persons.FrameStep;
    const timestamps = persons.Timestamps[closestTimestampKey] ?? [];

    const calculatedPersonMarkings = timestamps
      .filter((timestamp) => timestamp.BoundingBox)
      .map((timestamp) =>
        calculatePersonMarking({
          timestamp,
          clientHeight,
          clientWidth,
          videoHeight,
          videoWidth,
        }),
      );
    setPersonMarkings(calculatedPersonMarkings);
    requestAnimationFrame(recalculateFrameElements);
  };

  return (
    <VideoBoxContainer>
      <VideoContainer>
        {personMarkings.map((personMarking) => (
          <PersonBox key={personMarking.index} personMarking={personMarking} />
        ))}
        <PersonList personMarkings={personMarkings} />
        <Video
          ref={videoPlayer}
          controls
          onPlaying={() => setVideoIsPlaying(true)}
          onPause={() => setVideoIsPlaying(false)}
          onTimeUpdate={handleVideoTimeUpdate}
          onLoadedMetadata={handleVideoMetadataLoaded}
        >
          <source src={api.videoUrl} />
        </Video>
      </VideoContainer>
      <Timeline
        timespans={timespans}
        videoDuration={videoDuration}
        percentagePlayed={percentagePlayed}
        onClick={handleTimelineClicked}
      />
    </VideoBoxContainer>
  );
};
