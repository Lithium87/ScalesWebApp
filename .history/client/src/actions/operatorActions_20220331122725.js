import axios from 'axios';
import {
  GET_ALL_OPERATORS_REQUEST,
  GET_ALL_OPERATORS_SUCCESS,
  GET_ALL_OPERATORS_FAIL,
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
