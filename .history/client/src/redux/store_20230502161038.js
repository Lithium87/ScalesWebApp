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
  operatorByIdUpdateReducer,
  operatorCreateReducer,
} from './reducers/operatorReducer';
import {
  allPlateGratingsTolerancesReducer,
  allLeadPasteTolerancesReducer,
  plateGratingsTolerancesByIdReducer,
  plateGratingsTolerancesByIdUpdateReducer,
  leadPasteTolerancesByIdReducer,
  leadPasteTolerancesByIdUpdateReducer,
  newPlateGratingsTolerancesReducer,
  newLeadPasteTolerancesReducer,
} from './reducers/tolerancesReducer';
import {listZvenaReducer} from './reducers/zvenaReducer';

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  allMeasurements: allMeasurementsReducer,
  measurementsPerScale: measurementsPerScaleReducer,
  filteredMeasurementsPerScale: filteredMeasurementsPerScaleReducer,
  operatorsList: listOperatorsReducer,
  operatorById: operatorByIdReducer,
  operatorByIdUpdate: operatorByIdUpdateReducer,
  operatorCreate: operatorCreateReducer,
  allPlateGratingsTolerances: allPlateGratingsTolerancesReducer,
  allLeadPasteTolerances: allLeadPasteTolerancesReducer,
  plateGratingsTolerancesById: plateGratingsTolerancesByIdReducer,
  plateGratingsTolerancesByIdUpdate: plateGratingsTolerancesByIdUpdateReducer,
  leadPasteTolerancesById: leadPasteTolerancesByIdReducer,
  leadPasteTolerancesByIdUpdate: leadPasteTolerancesByIdUpdateReducer,
  newPlateGratingsTolerances: newPlateGratingsTolerancesReducer,
  newLeadPasteTolerances: newLeadPasteTolerancesReducer,
  zvenaList: listZvenaReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
