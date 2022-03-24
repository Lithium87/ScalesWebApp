import {
  GET_ALL_SCALES_REQUEST,
  GET_ALL_SCALES_SUCCESS,
  GET_ALL_SCALES_FAIL,
} from '../constants/scaleConstants';

export const getScalesReducer = (state = {scales: []}, action) => {
  switch (action.type) {
    case GET_ALL_SCALES_REQUEST:
      return {...state, loading: true, scales: []};
    case GET_ALL_SCALES_SUCCESS:
      return {
        ...state,
        loading: false,
        scales: action.payload,
      };
    case GET_ALL_SCALES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
