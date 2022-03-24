import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
  composedWithDevTools,
  composeWithDevTools,
} from 'redux-devtools-extension';
import scales from './reducers/scalesReducer';

const rootReducer = combineReducers ({
  scales,
});

const store = createStore (
  rootReducer,
  composeWithDevTools (applyMiddleware (thunk))
);
