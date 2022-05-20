import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
  ALL_MEASUREMENTS_REQUEST,
  ALL_MEASUREMENTS_SUCCESS,
  ALL_MEASUREMENTS_FAIL,
} from '../constants/measurementsConstants';

export const allMeasurementsReducer = (
  state = {allMeasurements: []},
  action
) => {
  switch (action.type) {
    case ALL_MEASUREMENTS_REQUEST:
      return {
        loading: true,
        allMeasurements: [],
      };
    case ALL_MEASUREMENTS_SUCCESS:
      return {
        loading: false,
        allMeasurements: action.payload,
      };
    case ALL_MEASUREMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const measurementsPerScaleReducer = (
  state = {measurementsPerScale: []},
  action
) => {
  switch (action.type) {
    case MEASUREMENTS_PER_SCALE_REQUEST:
      return {
        loading: true,
        measurementsPerScale: [],
      };
    case MEASUREMENTS_PER_SCALE_SUCCESS:
      return {
        loading: false,
        measurementsPerScale: action.payload.id,
      };
    case MEASUREMENTS_PER_SCALE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
