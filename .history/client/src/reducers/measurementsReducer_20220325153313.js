import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
} from '../constants/measurementsConstants';

export const listScalesReducer = (
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
