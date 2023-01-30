import {
  GET_PLATE_GRATINGS_TOLERANCES_REQUEST,
  GET_PLATE_GRATINGS_TOLERANCES_SUCCESS,
  GET_PLATE_GRATINGS_TOLERANCES_FAILURE,
} from '../constants/tolerancesConstants';

export const allPlateGratingsTolerancesReducer = (
  state = {allPlateGratingsTolerances: {}},
  action
) => {
  switch (action.type) {
    case GET_PLATE_GRATINGS_TOLERANCES_REQUEST:
      return {
        loading: true,
        allPlateGratingsTolerances: {},
      };
    case GET_PLATE_GRATINGS_TOLERANCES_SUCCESS:
      return {
        loading: false,
        allPlateGratingsTolerances: action.payload.data,
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
