import axios from 'axios';
import {
  LIST_SCALES_REQUEST,
  LIST_SCALES_SUCCESS,
  LIST_SCALES_FAIL,
} from '../constants/scalesConstants';

export const listScales = () => async dispatch => {
  try {
    dispatch ({type: LIST_SCALES_REQUEST});
    const {data} = await axios.get ('/api/scales');
    console.log (data);

    dispatch ({
      type: LIST_SCALES_SUCCESS,
      payload: data.scales,
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
