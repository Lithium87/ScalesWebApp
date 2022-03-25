import axios from 'axios';
import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
} from '../constants/measurementsConstants';

export const getMeasurementsPerScale = id => async dispatch => {
  try {
    dispatch ({type: MEASUREMENTS_PER_SCALE_REQUEST});

    const request = axios.get (`http://localhost:5000/api/measurements/${id}`);
    console.log (request);

    dispatch ({
      type: MEASUREMENTS_PER_SCALE_SUCCESS,
      payload: request.data.measurementsPerScale,
    });
  } catch (error) {
    dispatch ({
      type: MEASUREMENTS_PER_SCALE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
