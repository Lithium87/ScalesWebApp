import axios from 'axios';
import {useParams} from 'react-touter-dom';
import {
  MEASUREMENTS_PER_SCALE_REQUEST,
  MEASUREMENTS_PER_SCALE_SUCCESS,
  MEASUREMENTS_PER_SCALE_FAIL,
} from '../constants/measurementsConstants';

export const listMeasurementsPerScale = () => async dispatch => {
  const {scaleId} = useParams ();

  try {
    dispatch ({type: MEASUREMENTS_PER_SCALE_REQUEST});
    const {data} = await axios.get (
      `http://localhost:5000/api/measurements/${scaleId}`
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
