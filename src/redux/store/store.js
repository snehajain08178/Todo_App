import {createStore, combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import addingReducer from './../reducer/reducer';
import { AsyncStorage } from 'react-native';

const rootReducer = combineReducers({
  mainReducer: addingReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => createStore(persistedReducer);

export default configureStore;
