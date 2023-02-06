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
  state = {plateGratingsTolerancesById: []},
  action
) => {
  switch (action.type) {
    case GET_PLATE_GRATINGS_TOLERANCES_BY_ID_REQUEST:
      return {
        loading: true,
        plateGratingsTolerancesById: [],
      };
    case GET_LEAD_PASTE_TOLERANCES_SUCCESS:
      return {
        loading: false,
        plateGratingsTolerancesById: action.payload,
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
