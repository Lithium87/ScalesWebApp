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
  newOperatorReducer,
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

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  allMeasurements: allMeasurementsReducer,
  measurementsPerScale: measurementsPerScaleReducer,
  filteredMeasurementsPerScale: filteredMeasurementsPerScaleReducer,
  operatorsList: listOperatorsReducer,
  operatorById: operatorByIdReducer,
  operatorByIdUpdate: operatorByIdUpdateReducer,
  newOperator: newOperatorReducer,
  allPlateGratingsTolerances: allPlateGratingsTolerancesReducer,
  allLeadPasteTolerances: allLeadPasteTolerancesReducer,
  plateGratingsTolerancesById: plateGratingsTolerancesByIdReducer,
  plateGratingsTolerancesByIdUpdate: plateGratingsTolerancesByIdUpdateReducer,
  leadPasteTolerancesById: leadPasteTolerancesByIdReducer,
  leadPasteTolerancesByIdUpdate: leadPasteTolerancesByIdUpdateReducer,
  newPlateGratingsTolerances: newPlateGratingsTolerancesReducer,
  newLeadPasteTolerances: newLeadPasteTolerancesReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
