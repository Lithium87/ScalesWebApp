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
  PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_REQUEST,
  PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_SUCCESS,
  PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_FAILURE,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_REQUEST,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_SUCCESS,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_FAILURE,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_REQUEST,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_SUCCESS,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_FAILURE,
  PLATE_GRATINGS_TOLERANCES_CREATE_REQUEST,
  PLATE_GRATINGS_TOLERANCES_CREATE_SUCCESS,
  PLATE_GRATINGS_TOLERANCES_CREATE_FAIL,
  PLATE_GRATINGS_TOLERANCES_CREATE_RESET,
  LEAD_PASTE_TOLERANCES_CREATE_REQUEST,
  LEAD_PASTE_TOLERANCES_CREATE_SUCCESS,
  LEAD_PASTE_TOLERANCES_CREATE_FAIL,
  LEAD_PASTE_TOLERANCES_CREATE_RESET,
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

export const listPlateGratingsTolerancesById = id => async dispatch => {
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
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updatePlateGratingsTolerancesById = tolerances => async dispatch => {
  try {
    dispatch ({type: PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.put (
      `http://localhost:5000/api/settings/plate_gratings_tolerances/${tolerances.id}`,
      tolerances,
      config
    );

    dispatch ({
      type: PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listLeadPasteTolerancesById = id => async dispatch => {
  try {
    dispatch ({type: GET_LEAD_PASTE_TOLERANCES_BY_ID_REQUEST});

    const {data} = await axios.get (
      `http://localhost:5000/api/settings/lead_paste_tolerances/${id}`
    );

    dispatch ({
      type: GET_LEAD_PASTE_TOLERANCES_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: GET_LEAD_PASTE_TOLERANCES_BY_ID_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateLeadPasteTolerancesById = tolerances => async dispatch => {
  try {
    dispatch ({type: LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.put (
      `http://localhost:5000/api/settings/lead_paste_tolerances/${tolerances.id}`,
      tolerances,
      config
    );

    dispatch ({
      type: LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createNewPlateGratingsTolerances = () => async dispatch => {
  try {
    dispatch ({type: PLATE_GRATINGS_TOLERANCES_CREATE_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.post (
      'http://localhost:5000/api/plate_gratings_tolerances',
      {},
      config
    );

    dispatch ({
      type: PLATE_GRATINGS_TOLERANCES_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: PLATE_GRATINGS_TOLERANCES_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createNewLeadPasteTolerances = () => async dispatch => {
  try {
    dispatch ({type: LEAD_PASTE_TOLERANCES_CREATE_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = axios.post (
      'http://localhost:5000/api/lead_paste_tolerances',
      {},
      config
    );

    dispatch ({
      type: LEAD_PASTE_TOLERANCES_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: LEAD_PASTE_TOLERANCES_CREATE_FAIL,
      payload: error.message && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
