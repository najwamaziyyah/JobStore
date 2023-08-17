// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { GlobalState } from './types';

// const initialState: GlobalState = {
//   isAuth: false,
//   authToken: undefined,
//   addRestaurantId: 0,
// };

// const globalSlice = createSlice({
//   name: 'global',
//   initialState,
//   reducers: {
//     setIsAuth: (state, action: PayloadAction<boolean>) => {
//       state.isAuth = action.payload;
//     },
//     setAuthToken: (state, action: PayloadAction<string | undefined>) => {
//       state.authToken = action.payload;
//     },
//     setAddRestaurantId: (state, action: PayloadAction<number>) => {
//       state.addRestaurantId = action.payload;
//     },
//   },
// });

// export const { setAddRestaurantId, setAuthToken, setIsAuth } =
//   globalSlice.actions;

// export default globalSlice.reducer;
