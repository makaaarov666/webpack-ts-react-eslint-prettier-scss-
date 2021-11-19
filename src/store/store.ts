import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import clockReducer from './clock';
import tableReducer from './stopwatchTable';

const reducer = combineReducers({
  clockReducer,
  tableReducer,
});

const setupStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

type TRootState = ReturnType<typeof reducer>;
type TAppStore = ReturnType<typeof setupStore>;
type TAppDispatch = TAppStore['dispatch'];

export { TRootState, TAppStore, TAppDispatch, setupStore };
