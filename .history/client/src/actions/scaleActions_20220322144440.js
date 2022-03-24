import {GET_ALL_SCALES, SCALES_ERROR} from '../constants/scaleConstants';
import axios from 'axios';

export const getAllScales = () => async dispatch => {
  try {
    const request = await axios.get ('http://localhost:5000/api/scales');
    dispatch ({
      type: GET_ALL_SCALES,
      payload: request.data,
    });
  } catch (e) {
    dispatch ({
      type: SCALES_ERROR,
      payload: console.log (e),
    });
  }
};
