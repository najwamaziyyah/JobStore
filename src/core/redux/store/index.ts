import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { IS_DEV } from '~/core/config';
// import global from '~/core/redux/slice/global';

const store = configureStore({
  reducer: combineReducers({
    // global,
  }),
  devTools: IS_DEV,
});

export default store;
