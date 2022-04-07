import axios from 'axios';
import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
  GET_SCALE_BY_ID_REQUEST,
  GET_SCALE_BY_ID_SUCCESS,
  GET_SCALE_BY_ID_FAIL,
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

export const getScaleById = scaleId => async dispatch => {
  try {
    dispatch ({type: GET_SCALE_BY_ID_REQUEST});
    const {data} = await axios.get (`http://localhost:5000/api/scales/scale`);

    dispatch ({
      type: GET_SCALE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_SCALE_BY_ID_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
