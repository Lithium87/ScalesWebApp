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
  PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_RESET,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_REQUEST,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_SUCCESS,
  GET_LEAD_PASTE_TOLERANCES_BY_ID_FAILURE,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_REQUEST,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_SUCCESS,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_FAILURE,
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_RESET,
  PLATE_GRATINGS_TOLERANCES_CREATE_REQUEST,
  PLATE_GRATINGS_TOLERANCES_CREATE_SUCCESS,
  PLATE_GRATINGS_TOLERANCES_CREATE_FAIL,
  PLATE_GRATINGS_TOLERANCES_CREATE_RESET,
  LEAD_PASTE_TOLERANCES_CREATE_REQUEST,
  LEAD_PASTE_TOLERANCES_CREATE_SUCCESS,
  LEAD_PASTE_TOLERANCES_CREATE_FAIL,
  LEAD_PASTE_TOLERANCES_CREATE_RESET,
} from '../constants/tolerancesConstants';

export const allPlateGratingsTolerancesReducer = (
  state = {allPlateGratingsTolerances: []},
  action
) => {
  switch (action.type) {
    case GET_PLATE_GRATINGS_TOLERANCES_REQUEST:
      return {
        loading: true,
        allPlateGratingsTolerances: [],
      };
    case GET_PLATE_GRATINGS_TOLERANCES_SUCCESS:
      return {
        loading: false,
        allPlateGratingsTolerances: action.payload,
      };
    case GET_PLATE_GRATINGS_TOLERANCES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const allLeadPasteTolerancesReducer = (
  state = {allLeadPasteTolerances: []},
  action
) => {
  switch (action.type) {
    case GET_LEAD_PASTE_TOLERANCES_REQUEST:
      return {
        loading: true,
        allLeadPasteTolerances: [],
      };
    case GET_LEAD_PASTE_TOLERANCES_SUCCESS:
      return {
        loading: false,
        allLeadPasteTolerances: action.payload,
      };
    case GET_LEAD_PASTE_TOLERANCES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const plateGratingsTolerancesByIdReducer = (
  state = {plateGratingsTolerancesById: {}},
  action
) => {
  switch (action.type) {
    case GET_PLATE_GRATINGS_TOLERANCES_BY_ID_REQUEST:
      return {
        loading: true,
        plateGratingsTolerancesById: {},
      };
    case GET_PLATE_GRATINGS_TOLERANCES_BY_ID_SUCCESS:
      return {
        loading: false,
        plateGratingsTolerancesById: action.payload,
      };
    case GET_PLATE_GRATINGS_TOLERANCES_BY_ID_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const plateGratingsTolerancesByIdUpdateReducer = (
  state = {plateGratingsTolerancesById: {}},
  action
) => {
  switch (action.type) {
    case PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_REQUEST:
      return {
        loading: true,
        plateGratingsTolerancesById: {},
      };
    case PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        plateGratingsTolerancesById: action.payload,
      };
    case PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const leadPasteTolerancesByIdReducer = (
  state = {leadPasteTolerancesById: {}},
  action
) => {
  switch (action.type) {
    case GET_LEAD_PASTE_TOLERANCES_BY_ID_REQUEST:
      return {
        loading: true,
        leadPasteTolerancesById: {},
      };
    case GET_LEAD_PASTE_TOLERANCES_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        leadPasteTolerancesById: action.payload,
      };
    case GET_LEAD_PASTE_TOLERANCES_BY_ID_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const leadPasteTolerancesByIdUpdateReducer = (
  state = {leadPasteTolerancesById: {}},
  action
) => {
  switch (action.type) {
    case LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_REQUEST:
      return {
        loading: true,
        leadPasteTolerancesById: {},
      };
    case LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        leadPasteTolerancesById: action.payload,
      };
    case LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_RESET:
      return {
        leadPasteTolerancesById: {},
      };
    default:
      return state;
  }
};

export const newPlateGratingsTolerancesReducer = (state = {}, action) => {
  switch (action.type) {
    case PLATE_GRATINGS_TOLERANCES_CREATE_REQUEST:
      return {
        loading: true,
      };
    case PLATE_GRATINGS_TOLERANCES_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        newPlateGratingsTolerances: action.payload,
      };
    case PLATE_GRATINGS_TOLERANCES_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const newLeadPasteTolerancesReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAD_PASTE_TOLERANCES_CREATE_REQUEST:
      return {
        loading: true,
      };
    case LEAD_PASTE_TOLERANCES_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        newLeadPasteTolerances: action.payload,
      };
    case LEAD_PASTE_TOLERANCES_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case LEAD_PASTE_TOLERANCES_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
