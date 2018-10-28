import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import staticData from './staticData';
import preloadData from './preloadData'; 
import reducer from './reducers/index';

export const store = createStore(reducer, preloadData, applyMiddleware(thunk.withExtraArgument(staticData)));
