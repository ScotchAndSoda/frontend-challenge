export type PersonApi = {
  FrameStep: number;
  Timestamps: Record<string, TimestampApi[]>;
  PersonTimeSpans: PersonTimespanApi[];
};

export type TimestampApi = {
  BoundingBox: BoundingBoxApi;
  Index: number;
  Face: FaceApi;
};

export type BoundingBoxApi = {
  Height: number;
  Width: number;
  Top: number;
  Left: number;
};

export type FaceApi = {
  BoundingBox: BoundingBoxApi;
  Landmarks: LandmarkApi[];
};

export type LandmarkApi = {
  X: number;
  Y: number;
};

export type PersonTimespanApi = {
  PersonIndex: number;
  TimeSpans: TimeSpansApi;
};

export type LabelApi = {
  Name: string;
  TimeSpans: TimeSpansApi;
};

export type TimeSpansApi = number[];
