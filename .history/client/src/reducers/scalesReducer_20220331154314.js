import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
  GET_SINGLE_SCALE_REQUEST,
  GET_SINGLE_SCALE_SUCCESS,
  GET_SINGLE_SCALE_FAIL,
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
        scales: action.payload,
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

export const getSingleScaleReducer = (state = {scale: {}}, action) => {
  switch (action.type) {
    case GET_SINGLE_SCALE_REQUEST:
      return {
        loading: true,
        scale: {},
      };
    case GET_SINGLE_SCALE_SUCCESS:
      return {
        loading: false,
        scale: {},
      };
    case GET_SINGLE_SCALE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
