import axios from 'axios';
import {
  GET_ZVENA_REQUEST,
  GET_ZVENA_SUCCESS,
  GET_ZVENA_FAIL,
} from '../constants/zvenaConstants';

export const listZvena = () => async dispatch => {
  try {
    dispatch ({type: GET_ZVENA_REQUEST});

    const {data} = await axios.get ('http://localhost:5000/zvena');

    dispatch ({
      type: GET_ZVENA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      GET_ZVENA_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
