import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
  ALL_MEASUREMENTS_REQUEST,
  ALL_MEASUREMENTS_SUCCESS,
  ALL_MEASUREMENTS_FAIL,
  GET_FILTERED_DATA_REQUEST,
  GET_FILTERED_DATA_SUCCESS,
  GET_FILTERED_DATA_FAIL,
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
        measurementsPerScale: action.payload,
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

export const filteredMeasurementsPerScaleReducer = (
  state = {filteredMeasurementsPerScale: []},
  action
) => {
  switch (action.type) {
    case GET_FILTERED_DATA_REQUEST:
      return {
        loading: true,
        filteredMeasurementsPerScale: [],
      };
    case GET_FILTERED_DATA_SUCCESS:
      return {
        loading: false,
        filteredMeasurementsPerScale: action.payload,
      };
    case GET_FILTERED_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
