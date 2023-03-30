import {
  GET_ALL_OPERATORS_REQUEST,
  GET_ALL_OPERATORS_SUCCESS,
  GET_ALL_OPERATORS_FAIL,
  GET_OPERATOR_BY_ID_REQUEST,
  GET_OPERATOR_BY_ID_SUCCESS,
  GET_OPERATOR_BY_ID_FAIL,
} from '../constants/operatorConstants';

export const listOperatorsReducer = (state = {operators: []}, action) => {
  switch (action.type) {
    case GET_ALL_OPERATORS_REQUEST:
      return {
        loading: true,
        operators: [],
      };
    case GET_ALL_OPERATORS_SUCCESS:
      return {
        loading: false,
        operators: action.payload,
      };
    case GET_ALL_OPERATORS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const operatorByIdReducer = (state = {operatorById: {}}, action) => {
  switch (action.type) {
    case GET_OPERATOR_BY_ID_REQUEST:
      return {
        loading: true,
        operatorById: {},
      };
    case GET_OPERATOR_BY_ID_SUCCESS:
      return {
        loading: false,
        operatorById: action.payload,
      };
    case GET_OPERATOR_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
