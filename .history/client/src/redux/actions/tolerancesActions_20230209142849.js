import axios from 'axios';
import {
  GET_PLATE_GRATINGS_TOLERANCES_REQUEST,
  GET_PLATE_GRATINGS_TOLERANCES_SUCCESS,
  GET_PLATE_GRATINGS_TOLERANCES_FAILURE,
  GET_LEAD_PASTE_TOLERANCES_REQUEST,
  GET_LEAD_PASTE_TOLERANCES_SUCCESS,
  GET_LEAD_PASTE_TOLERANCES_FAILURE,
  GET_PLATE_GRATINGS_TOLERANCES_BY_ID_REQUEST,
  GET_PLATE_GRATINGS_TOLERANCES_BY_ID_SUCCESS,
  GET_PLATE_GRATINGS_TOLERANCES_BY_ID_FAILURE,
} from '../constants/tolerancesConstants';

export const getAllPlateGratingsTolerances = () => async dispatch => {
  try {
    dispatch ({type: GET_PLATE_GRATINGS_TOLERANCES_REQUEST});

    const {data} = await axios.get (
      'http://localhost:5000/api/settings/plate_gratings_tolerances'
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

export const getAllLeadPasteTolerances = () => async dispatch => {
  try {
    dispatch ({type: GET_LEAD_PASTE_TOLERANCES_REQUEST});

    const {data} = await axios.get (
      'http://localhost:5000/api/settings/lead_paste_tolerances'
    );

    dispatch ({
      type: GET_LEAD_PASTE_TOLERANCES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_LEAD_PASTE_TOLERANCES_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getPlateGratingsTolerancesById = id => async dispatch => {
  try {
    dispatch ({type: GET_PLATE_GRATINGS_TOLERANCES_BY_ID_REQUEST});

    const {data} = await axios.get (
      `http://localhost:5000/api/settings/plate_gratings_tolerances/${id}`
    );

    dispatch ({
      type: GET_PLATE_GRATINGS_TOLERANCES_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_PLATE_GRATINGS_TOLERANCES_BY_ID_FAILURE,
      payload: error.responce && error.responce.data.message
        ? error.responce.data.message
        : error.message,
    });
  }
};