import { configureStore } from '@reduxjs/toolkit';
// import userReduce from '../features/counter/userSlice';
import userReducer from './usersSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
