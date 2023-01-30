import {
  GET_PLATE_GRATINGS_TOLERANCES_REQUEST,
  GET_PLATE_GRATINGS_TOLERANCES_SUCCESS,
  GET_PLATE_GRATINGS_TOLERANCES_FAILURE,
} from '../constants/tolerancesConstants';

export const allPlateGratingsTolerancesReducer = (
  state = {allTolerances: []},
  action
) => {
  switch (action.type) {
    case GET_PLATE_GRATINGS_TOLERANCES_REQUEST:
      return {
        loading: true,
        allTolerances: [],
      };
    case GET_PLATE_GRATINGS_TOLERANCES_SUCCESS:
      return {
        loading: false,
        allTolerances: action.payload,
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
