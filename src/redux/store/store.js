import {createStore, combineReducers} from 'redux';
import addingReducer from './../reducer/reducer';

const rootReducer = combineReducers({
  mainReducer: addingReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
