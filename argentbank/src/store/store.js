import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userTempReducer from './slices/userTempSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  userReducer,
  userTempReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['userTempReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  //devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
