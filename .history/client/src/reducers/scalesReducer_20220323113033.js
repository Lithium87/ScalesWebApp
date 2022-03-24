import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
} from '../constants/scalesConstants';

export const listScalesReducer = (state = {scales: []}, action) => {
  switch (action.type) {
    case LIST_SCALES_REQUEST:
      return {
        loading: true,
        scales: [],
      };
    case LIST_SCALES_SUCCESS:
      return {
        loading: false,
        scales: action.payload.scales,
      };
    case LIST_SCALES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
