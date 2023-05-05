import {
  GET_ZVENA_REQUEST,
  GET_ZVENA_SUCCESS,
  GET_ZVENA_FAIL,
} from '../constants/zvenaConstants';

export const listZvenaReducer = (state = {zvena: []}, action) => {
  switch (action.type) {
    case GET_ZVENA_REQUEST:
      return {
        loading: true,
        zvena: [],
      };
    case GET_ZVENA_SUCCESS:
      return {
        loading: false,
        zvena: action.payload,
      };
    case GET_ZVENA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
