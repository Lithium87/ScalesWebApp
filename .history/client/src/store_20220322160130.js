import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
  composedWithDevTools,
  composeWithDevTools,
} from 'redux-devtools-extension';
import {listScales} from './reducers/scalesReducer';

const rootReducer = combineReducers ({
  scales: listScales,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);

export default store;
