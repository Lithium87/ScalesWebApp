import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {listScalesReducer} from './reducers/scalesReducer';
import {measurementsPerScaleReducer} from './reducers/measurementReducers';

const rootReducer = combineReducers ({
  scalesList: listScalesReducer,
  measurementsPerScale: measurementsPerScaleReducer,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
