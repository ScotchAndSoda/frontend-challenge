import * as api from './api';

export type PersonMarking = {
  boundingBox: api.BoundingBoxApi;
  index: api.PersonTimespanApi['PersonIndex'];
  face?: api.FaceApi;
};

export * from './api';
