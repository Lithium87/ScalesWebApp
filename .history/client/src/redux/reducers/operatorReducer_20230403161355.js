import {
  GET_ALL_OPERATORS_REQUEST,
  GET_ALL_OPERATORS_SUCCESS,
  GET_ALL_OPERATORS_FAIL,
  GET_OPERATOR_BY_ID_REQUEST,
  GET_OPERATOR_BY_ID_SUCCESS,
  GET_OPERATOR_BY_ID_FAIL,
  OPERATOR_BY_ID_UPDATE_REQUEST,
  OPERATOR_BY_ID_UPDATE_SUCCESS,
  OPERATOR_BY_ID_UPDATE_FAIL,
  OPERATOR_BY_ID_UPDATE_RESET,
  CREATE_OPERATOR_REQUEST,
  CREATE_OPERATOR_SUCCESS,
  CREATE_OPERATOR_FAIL,
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

export const operatorByIdUpdateReducer = (
  state = {operatorById: {}},
  action
) => {
  switch (action.type) {
    case OPERATOR_BY_ID_UPDATE_REQUEST:
      return {
        loading: true,
        operatorById: {},
      };
    case OPERATOR_BY_ID_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        operatorById: action.payload,
      };
    case OPERATOR_BY_ID_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case OPERATOR_BY_ID_UPDATE_RESET:
      return {
        operatorById: {},
      };
    default:
      return state;
  }
};

export const newOperatorReducer = (state = {newOperator: {}}, action) => {
  switch (action.type) {
    case CREATE_OPERATOR_REQUEST:
      return {
        loading: true,
        newOperator: {},
      };
    case CREATE_OPERATOR_SUCCESS:
      return {
        loading: false,
        success: true,
        newOperator: action.payload,
      };
    case CREATE_OPERATOR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
