import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {listScalesReducer, getScaleByIdReducer} from './reducers/scalesReducer';
import {measurementsPerScaleReducer} from './reducers/measurementsReducer';
import {listOperatorsReducer} from './reducers/operatorReducer';

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  getScaleById: getScaleByIdReducer,
  measurementsPerScale: measurementsPerScaleReducer,
  operatorsList: listOperatorsReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
