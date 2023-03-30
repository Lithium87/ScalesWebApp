import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {listScalesReducer} from './reducers/scalesReducer';
import {
  measurementsPerScaleReducer,
  filteredMeasurementsPerScaleReducer,
  allMeasurementsReducer,
} from './reducers/measurementsReducer';
import {
  listOperatorsReducer,
  operatorByIdReducer,
} from './reducers/operatorReducer';
import {
  allPlateGratingsTolerancesReducer,
  allLeadPasteTolerancesReducer,
  plateGratingsTolerancesByIdReducer,
  plateGratingsTolerancesByIdUpdateReducer,
  leadPasteTolerancesByIdReducer,
  leadPasteTolerancesByIdUpdateReducer,
} from './reducers/tolerancesReducer';

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  allMeasurements: allMeasurementsReducer,
  measurementsPerScale: measurementsPerScaleReducer,
  filteredMeasurementsPerScale: filteredMeasurementsPerScaleReducer,
  operatorsList: listOperatorsReducer,
  operatorById: operatorByIdReducer,
  allPlateGratingsTolerances: allPlateGratingsTolerancesReducer,
  allLeadPasteTolerances: allLeadPasteTolerancesReducer,
  plateGratingsTolerancesById: plateGratingsTolerancesByIdReducer,
  plateGratingsTolerancesByIdUpdate: plateGratingsTolerancesByIdUpdateReducer,
  leadPasteTolerancesById: leadPasteTolerancesByIdReducer,
  leadPasteTolerancesByIdUpdate: leadPasteTolerancesByIdUpdateReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
