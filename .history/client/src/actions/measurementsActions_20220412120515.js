import axios from 'axios';
import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
  ALL_MEASUREMENTS_REQUEST,
  ALL_MEASUREMENTS_SUCCESS,
  ALL_MEASUREMENTS_FAIL,
} from '../constants/measurementsConstants';

export const listAllMeasurements = () => async dispatch => {
  try {
    dispatch ({type: ALL_MEASUREMENTS_REQUEST});
    const {data} = await axios.get ('http://localhost:5000/api/measurements');

    dispatch ({
      type: ALL_MEASUREMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: ALL_MEASUREMENTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listMeasurementsPerScale = () => async dispatch => {
  try {
    dispatch ({type: MEASUREMENTS_PER_SCALE_REQUEST});
    const {data} = await axios.get (
      'http://localhost:5000/api/measurements/id'
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
