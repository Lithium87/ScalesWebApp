import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
  GET_SCALE_BY_ID_REQUEST,
  GET_SCALE_BY_ID_SUCCESS,
  GET_SCALE_BY_ID_FAIL,
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

export const getScaleByIdReducer = (state = {scale: {}}, action) => {
  switch (action.type) {
    case GET_SCALE_BY_ID_REQUEST:
      return {
        loading: true,
        scale: {},
      };
    case GET_SCALE_BY_ID_SUCCESS:
      return {
        loading: false,
        scale: action.payload,
      };
    case GET_SCALE_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
