import axios from 'axios';
import {
  GET_PLATE_GRATINGS_TOLERANCES_REQUEST,
  GET_PLATE_GRATINGS_TOLERANCES_SUCCESS,
  GET_PLATE_GRATINGS_TOLERANCES_FAILURE,
} from '../actions/tolerancesActions';

export const allPlateGratingsTolerances = () => async dispatch => {
  try {
    dispatch ({type: GET_PLATE_GRATINGS_TOLERANCES_REQUEST});

    const {data} = await axios.get (
      'http://localhost:5000/api/settings/plate_gratings_tolerances-;'
    );

    dispatch ({
      type: GET_PLATE_GRATINGS_TOLERANCES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_PLATE_GRATINGS_TOLERANCES_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
