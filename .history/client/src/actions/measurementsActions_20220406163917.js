import axios from 'axios';
import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
} from '../constants/measurementsConstants';

export const listMeasurementsPerScale = (match, location) => async dispatch => {
  try {
    dispatch ({type: MEASUREMENTS_PER_SCALE_REQUEST});
    const {data} = await axios.get (
      `http://localhost:5000/api/measurements/${location}`
    );

    dispatch ({
      type: MEASUREMENTS_PER_SCALE_SUCCESS,
      payload: data,
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
