import axios from 'axios';
import {
  GET_ALL_SCALES_REQUEST,
  GET_ALL_SCALES_SUCCESS,
  GET_ALL_SCALES_FAIL,
} from '../constants/scaleConstants';

export const getAllScales = () => async dispatch => {
  try {
    dispatch ({type: GET_ALL_SCALES_REQUEST});

    const {data} = axios.get ('/api/scales/');

    dispatch ({
      type: GET_ALL_SCALES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_ALL_SCALES_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
