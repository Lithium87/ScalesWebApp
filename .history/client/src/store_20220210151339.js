import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getScalesReducer} from './reducers/scaleReducers';

const reducer = combineReducers ({
  getScales: getScalesReducer,
});

const middleware = [thunk];

const store = createStore (
  reducer,
  composeWithDevTools (applyMiddleware (...middleware))
);

export default store;
