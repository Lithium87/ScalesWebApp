import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {listScalesReducer} from './reducers/scalesReducer';
import {
  measurementsPerScaleReducer,
  filteredMeasurementsPerScaleReducer,
  allMeasurementsReducer,
} from './reducers/measurementsReducer';
import {listOperatorsReducer} from './reducers/operatorReducer';

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  allMeasurements: allMeasurementsReducer,
  measurementsPerScale: measurementsPerScaleReducer,
  filteredMeasurementsPerScale: filteredMeasurementsPerScaleReducer,
  operatorsList: listOperatorsReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
