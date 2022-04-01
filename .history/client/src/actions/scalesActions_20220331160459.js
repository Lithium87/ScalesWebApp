import axios from 'axios';
import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
  GET_SINGLE_SCALE_REQUEST,
  GET_SINGLE_SCALE_SUCCESS,
  GET_SINGLE_SCALE_FAIL,
} from '../constants/scalesConstants';

export const listScales = () => async dispatch => {
  try {
    dispatch ({type: LIST_SCALES_REQUEST});
    const {data} = await axios.get ('http://localhost:5000/api/scales');

    dispatch ({
      type: LIST_SCALES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: LIST_SCALES_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getSingleScale = id => async dispatch => {
  try {
    dispatch ({type: GET_SINGLE_SCALE_REQUEST});

    const {data} = await axios.get (`http://localhost:5000/api/scales/${id}`);

    dispatch ({
      type: GET_SINGLE_SCALE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_SINGLE_SCALE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
