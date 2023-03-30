import axios from 'axios';
import {
  GET_ALL_OPERATORS_REQUEST,
  GET_ALL_OPERATORS_SUCCESS,
  GET_ALL_OPERATORS_FAIL,
  GET_OPERATOR_BY_ID_REQUEST,
  GET_OPERATOR_BY_ID_SUCCESS,
  GET_OPERATOR_BY_ID_FAIL,
} from '../constants/operatorConstants';

export const listOperators = () => async dispatch => {
  try {
    dispatch ({type: GET_ALL_OPERATORS_REQUEST});

    const {data} = await axios.get ('http://localhost:5000/api/operators');

    dispatch ({
      type: GET_ALL_OPERATORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_ALL_OPERATORS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listOperatorById = id => async dispatch => {
  try {
    dispatch ({type: GET_OPERATOR_BY_ID_REQUEST});

    const {data} = await axios.get (
      `http://localhost:5000/api/operators/${id}`
    );

    dispatch ({
      type: GET_OPERATOR_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_OPERATOR_BY_ID_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
